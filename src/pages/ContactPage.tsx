import { useState, type FormEvent } from 'react';
import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import { TurnstileWidget } from '../components/TurnstileWidget';
import { useLeadSubmission } from '../hooks/useLeadSubmission';
import data from '../Data/Data.json';
import type { FooterData, LeadPayload } from '../types/content';

const links = (data.footer as FooterData).sections.getInTouch.links;
const initialForm: LeadPayload = { name: '', email: '', phone: '', projectType: '', budget: '', timeline: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileKey, setTurnstileKey] = useState(0);
  const { status, error, submit } = useLeadSubmission();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (await submit(form, turnstileToken)) setForm(initialForm);
    setTurnstileToken('');
    setTurnstileKey((key) => key + 1);
  };
  return (
    <PageLayout>
      <Seo title="Contact" description="Contact Wired Creations about a digital product, website, or partnership." path="/contact" />
      <section className="bg-navy-950 pb-20"><div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Contact</p><h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Say hello.</h1><p className="mt-6 max-w-2xl text-lg text-slate-300">Whether you have a project or a question, we’ll get back within one business day.</p>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section className="rounded-[2rem] border border-cyan-400/10 p-8"><h2 className="text-2xl font-semibold text-white">Contact details</h2><ul className="mt-6 space-y-4 text-slate-300">{links.map((link) => <li key={link.label}><a href={link.href} target={link.href?.startsWith('http') ? '_blank' : undefined} rel={link.href?.startsWith('http') ? 'noreferrer' : undefined} className="text-cyan-400">{link.label}</a></li>)}</ul><p className="mt-8 text-slate-300">Projects start from ₹8,000.</p></section>
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-cyan-400/10 p-8">
            <div><label htmlFor="contact-name" className="text-sm text-slate-200">Name</label><input id="contact-name" autoComplete="name" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="mt-2 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white" /></div>
            <div><label htmlFor="contact-email" className="text-sm text-slate-200">Email</label><input id="contact-email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="mt-2 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white" /></div>
            <div><label htmlFor="contact-message" className="text-sm text-slate-200">Message</label><textarea id="contact-message" required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="mt-2 h-36 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white" /></div>
            <TurnstileWidget key={turnstileKey} onToken={setTurnstileToken} />
            <div aria-live="polite">{status === 'success' && <p className="text-green-300">Message sent. We’ll be in touch soon.</p>}{status === 'error' && <p className="text-red-300">{error}</p>}</div>
            <button type="submit" disabled={status === 'loading' || !turnstileToken} className="w-full rounded-full bg-cyan-400 px-7 py-3 font-semibold text-navy-950 disabled:opacity-50">{status === 'loading' ? 'Sending…' : 'Send message'}</button>
          </form>
        </div>
      </div></section>
    </PageLayout>
  );
}
