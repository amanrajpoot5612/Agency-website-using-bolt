import { connectDatabase } from '../server/database.js';
import { Lead } from '../server/lead-model.js';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const TURNSTILE_ENDPOINT = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const MAX_BODY_BYTES = 24_000;

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const fields: Array<keyof LeadPayload> = ['name', 'email', 'phone', 'projectType', 'budget', 'timeline', 'message'];

function json(body: object, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
}

function cleanPayload(value: unknown): { lead: LeadPayload; turnstileToken: string } | null {
  if (!value || typeof value !== 'object') return null;
  const candidate = value as Record<string, unknown>;
  if (fields.some((field) => typeof candidate[field] !== 'string')) return null;
  if (typeof candidate.turnstileToken !== 'string' || candidate.turnstileToken.length > 2_048) return null;

  const lead = Object.fromEntries(fields.map((field) => [field, (candidate[field] as string).trim()])) as unknown as LeadPayload;
  if (!lead.name || !lead.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return null;
  if (fields.some((field) => lead[field].length > (field === 'message' ? 5_000 : 300))) return null;
  return { lead, turnstileToken: candidate.turnstileToken };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;',
  })[character] as string);
}

function emailBody(lead: LeadPayload) {
  const rows: Array<[string, string]> = [
    ['Name', lead.name], ['Email', lead.email], ['Phone', lead.phone],
    ['Project type', lead.projectType], ['Budget', lead.budget], ['Timeline', lead.timeline],
  ];
  const details = rows.filter(([, value]) => value).map(([label, value]) =>
    `<tr><th align="left" style="padding:6px 16px 6px 0">${label}</th><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`,
  ).join('');
  return `<h1>New website inquiry</h1><table>${details}</table><h2>Message</h2><p style="white-space:pre-wrap">${escapeHtml(lead.message)}</p>`;
}

async function verifyTurnstile(token: string, request: Request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return false;
  const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  const response = await fetch(TURNSTILE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret, response: token, remoteip: remoteIp }),
  });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export default async function handler(request: Request) {
  if (request.method !== 'POST') return json({ message: 'Method not allowed.' }, 405);
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) return json({ message: 'The inquiry is too large.' }, 413);

  let body: unknown;
  try { body = await request.json(); } catch { return json({ message: 'Invalid request.' }, 400); }
  const submission = cleanPayload(body);
  if (!submission) return json({ message: 'Please check the required fields and verification.' }, 400);

  try {
    if (!await verifyTurnstile(submission.turnstileToken, request)) {
      return json({ message: 'Security verification failed. Please refresh and try again.' }, 403);
    }
  } catch {
    return json({ message: 'Security verification is temporarily unavailable. Please try again.' }, 503);
  }

  let savedLead;
  try {
    await connectDatabase();
    savedLead = await Lead.create(submission.lead);
  } catch (error) {
    console.error('Lead persistence failed:', error instanceof Error ? error.message : 'Unknown error');
    return json({ message: 'We could not save your inquiry. Please try again.' }, 503);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;
  if (!apiKey || !from || !to) {
    await Lead.updateOne({ _id: savedLead._id }, { notificationStatus: 'failed', notificationError: 'Email configuration missing' });
    console.error('Lead saved, but Resend environment variables are missing.');
    return json({ message: 'Inquiry received. We will be in touch soon.' }, 202);
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], reply_to: submission.lead.email,
        subject: `New inquiry from ${submission.lead.name}`,
        html: emailBody(submission.lead),
      }),
    });
    if (!response.ok) {
      const failure = `Resend HTTP ${response.status}`;
      await Lead.updateOne({ _id: savedLead._id }, { notificationStatus: 'failed', notificationError: failure });
      console.error('Lead saved, but email delivery failed:', failure);
      return json({ message: 'Inquiry received. We will be in touch soon.' }, 202);
    }
    const result = await response.json() as { id?: string };
    await Lead.updateOne({ _id: savedLead._id }, { notificationStatus: 'sent', notificationId: result.id || '', notificationError: '' });
    return json({ message: 'Inquiry sent.' });
  } catch (error) {
    await Lead.updateOne({ _id: savedLead._id }, { notificationStatus: 'failed', notificationError: 'Email request failed' });
    console.error('Lead saved, but email request failed:', error instanceof Error ? error.message : 'Unknown error');
    return json({ message: 'Inquiry received. We will be in touch soon.' }, 202);
  }
}
