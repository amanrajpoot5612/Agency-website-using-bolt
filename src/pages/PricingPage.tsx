import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';
import { Link } from 'react-router-dom';
import data from '../Data/Data.json';

export default function PricingPage() {
  const plans = (data as any).pricing?.plans || (data as any).pricing || [];

  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Pricing</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Transparent pricing. No hidden fees.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Fixed-scope packages with clear deliverables so you know the number before we start.</p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan: any) => (
              <div key={plan.label || plan.name} className="rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5 transition hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">{plan.label || plan.name}</p>
                <h2 className="mt-5 text-3xl font-semibold text-white">{plan.price || plan.rate || plan.from}</h2>
                <p className="mt-4 text-slate-300">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-slate-400">
                  {(plan.features || plan.items || ['Clear deliverables', 'Fast launch-ready workflow', 'Support included']).map((it: string) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
                <Link
                  to="/start"
                  className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300"
                >
                  Start a Project
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-navy-900/70 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white">Don’t see your exact project?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">We quote custom work transparently, and every engagement begins with a short discovery call.</p>
            <Link
              to="/start"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300"
            >
              Book a call →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
