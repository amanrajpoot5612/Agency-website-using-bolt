import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';

export default function StartPage() {
  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Start a project</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Let’s build something great.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Tell us about your project and we’ll reply within one business day with next steps.</p>

          <div className="mt-14 grid gap-6 rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8 sm:grid-cols-2">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-200">Name</label>
              <input className="w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="Your name" />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-200">Email</label>
              <input className="w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="you@example.com" />
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-200">Project type</label>
              <select className="w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white outline-none focus:border-cyan-400">
                <option>Web Design</option>
                <option>Web App</option>
                <option>E-commerce</option>
                <option>Mobile</option>
                <option>Not sure</option>
              </select>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-200">Budget range</label>
              <select className="w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white outline-none focus:border-cyan-400">
                <option>&lt; ₹3,000</option>
                <option>₹3,000–₹8,000</option>
                <option>₹8,000–₹20,000</option>
                <option>₹20,000+</option>
              </select>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8">
            <label className="block text-sm font-medium text-slate-200">Project description</label>
            <textarea className="mt-3 h-40 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-4 text-white outline-none focus:border-cyan-400" placeholder="Tell us what you're building"></textarea>
          </div>

          <div className="mt-8 text-center">
            <button className="inline-flex rounded-full bg-cyan-400 px-10 py-4 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">
              Send inquiry
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
