import { useState, type FormEvent } from 'react';
import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import { TurnstileWidget } from '../components/TurnstileWidget';
import { useLeadSubmission } from '../hooks/useLeadSubmission';
import type { LeadPayload } from '../types/content';
import data from '../Data/Data.json';

const copy = data.siteCopy.startPage;
const formCopy = data.siteCopy.contactForm;
const initialForm: LeadPayload = { name: '', email: '', phone: '', projectType: formCopy.projectTypes[0].label, budget: formCopy.budgets[0], timeline: '', message: '' };

export default function StartPage() {
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
      <Seo {...data.siteCopy.seo.start} path="/start" />
      <section className="bg-navy-950 pb-20"><div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">{copy.eyebrow}</p><h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{copy.title}</h1><p className="mt-6 max-w-2xl text-lg text-slate-300">{copy.intro}</p>
        <form onSubmit={handleSubmit} className="mt-14 space-y-8">
          <div className="grid gap-6 rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8 sm:grid-cols-2">
            <div><label htmlFor="start-name" className="block text-sm font-medium text-slate-200">Name</label><input id="start-name" name="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="mt-3 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white" /></div>
            <div><label htmlFor="start-email" className="block text-sm font-medium text-slate-200">Email</label><input id="start-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="mt-3 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white" /></div>
            <div><label htmlFor="start-type" className="block text-sm font-medium text-slate-200">Project type</label><select id="start-type" name="projectType" value={form.projectType} onChange={(e) => setForm({...form, projectType: e.target.value})} className="mt-3 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white"><option>Portfolio Site (Pre-defined)</option><option>Portfolio Site (Custom Design)</option><option>Landing Page</option><option>Business Website</option><option>Custom Mobile App</option><option>CRM + Analytics Integration</option></select></div>
            <div><label htmlFor="start-budget" className="block text-sm font-medium text-slate-200">Budget range</label><select id="start-budget" name="budget" value={form.budget} onChange={(e) => setForm({...form, budget: e.target.value})} className="mt-3 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white"><option>₹8,000 - ₹15,000</option><option>₹18,000 - ₹35,000</option><option>₹25,000 - ₹80,000</option><option>₹80,000+</option></select></div>
          </div>
          <div className="rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8"><label htmlFor="start-message" className="block text-sm font-medium text-slate-200">Project description</label><textarea id="start-message" name="message" required value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="mt-3 h-40 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-4 text-white" /></div>
          <TurnstileWidget key={turnstileKey} onToken={setTurnstileToken} />
          <div aria-live="polite">{status === 'success' && <p className="text-green-300">Thanks—your inquiry was sent. We’ll reply within one business day.</p>}{status === 'error' && <p className="text-red-300">{error}</p>}</div>
          <button type="submit" disabled={status === 'loading' || !turnstileToken} className="rounded-full bg-cyan-400 px-10 py-4 font-semibold text-navy-950 disabled:opacity-50">{status === 'loading' ? 'Sending…' : 'Send inquiry'}</button>
        </form>
      </div></section>
    </PageLayout>
  );
}
