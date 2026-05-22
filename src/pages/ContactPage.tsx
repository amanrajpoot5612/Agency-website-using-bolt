import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Contact</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Say hello.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Whether you have a project, a question, or want to talk ideas, we’ll get back within one business day.</p>

          <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_0.9fr]">
            <div className="rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-white">Contact details</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                <p>Email: <a href="mailto:hello@wiredcreations.shop" className="text-cyan-400">hello@wiredcreations.shop</a></p>
                <p>Response time: Within 1 business day</p>
                <p>Location: Remote-first, globally available</p>
              </div>
              <div className="mt-10 space-y-3 text-slate-300">
                <p className="font-semibold text-white">FAQ</p>
                <p>Yes, we take on small projects from ₹3,000.</p>
                <p>Yes, book a call first if you want to discuss scope.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200">Name</label>
                  <input className="mt-2 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200">Email</label>
                  <input className="mt-2 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-200">Message</label>
                  <textarea className="mt-2 h-36 w-full rounded-3xl border border-slate-800 bg-navy-900 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="Tell us what you need"></textarea>
                </div>
                <button className="inline-flex w-full justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
