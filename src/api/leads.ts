import type { LeadPayload } from '../types/content';

const TIMEOUT_MS = 15_000;

export async function submitLead(payload: LeadPayload, turnstileToken: string): Promise<void> {
  const backendUri = import.meta.env.VITE_BACKEND_URI?.replace(/\/$/, '');
  const endpoint = `${backendUri || ''}/api/schedule-consultation`;

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...Object.fromEntries(Object.entries(payload).map(([key, value]) => [key, value.trim()])),
        turnstileToken,
      }),
      signal: controller.signal,
    });
    const contentType = response.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
      ? await response.json() as { message?: string }
      : { message: await response.text() };
    if (!response.ok) throw new Error(body.message || 'We could not send your inquiry. Please try again.');
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('The request timed out. Please try again.');
    }
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
