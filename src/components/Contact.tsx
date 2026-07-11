import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLeadSubmission } from '../hooks/useLeadSubmission';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: 'Business Website', budget: '₹25,000 - ₹80,000', timeline: '', message: '' });
  const { status, error, submit } = useLeadSubmission();
  const handleSubmit = async (e: FormEvent) => { e.preventDefault(); if (await submit(form)) setForm({ ...form, name: '', email: '', phone: '', message: '' }); };
  return <section id="contact" className="section contact-section"><div className="shell contact-grid">
    <div className="contact-copy"><p className="eyebrow">Start a project / Say hello</p><h2>Let’s make<br/><em>something matter.</em></h2><p>Tell us what you’re building, where it’s stuck, and what success looks like. We’ll reply within one business day.</p><div><span>Prefer email?</span><a href="mailto:info@wiredcreations.com">info@wiredcreations.com</a></div></div>
    <form onSubmit={handleSubmit} className="contact-form"><div className="form-row"><label>Name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" autoComplete="name"/></label><label>Work email<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@company.com" autoComplete="email"/></label></div><div className="form-row"><label>What are we making?<select value={form.projectType} onChange={e => setForm({...form, projectType: e.target.value})}><option>Business Website</option><option>Landing Page</option><option>Web Application</option><option>Mobile App</option><option>Brand + Website</option></select></label><label>Investment range<select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}><option>₹18,000 - ₹35,000</option><option>₹25,000 - ₹80,000</option><option>₹80,000+</option></select></label></div><label>Tell us about the project<textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="The context, the ambition, the timeline..." rows={4}/></label>
    <div className="form-submit"><p aria-live="polite">{status === 'success' ? 'Thanks — your message is on its way.' : status === 'error' ? error : 'No hard sell. Just a useful first conversation.'}</p><button disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send inquiry'}<ArrowUpRight size={17}/></button></div></form>
  </div></section>;
};
