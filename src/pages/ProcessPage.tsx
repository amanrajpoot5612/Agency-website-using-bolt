import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';

const phases = [
  { title: 'Discovery', timeline: 'Week 1', description: 'Strategy call, scope doc, and project kickoff.' },
  { title: 'Design', timeline: 'Week 1–2', description: 'Wireframes, UI design, and client review rounds.' },
  { title: 'Build', timeline: 'Week 2–5', description: 'Development sprints, integrations, and review cycles.' },
  { title: 'Review', timeline: 'Week 5–6', description: 'QA, client validation, and final revisions.' },
  { title: 'Launch', timeline: 'Week 6', description: 'Deployment, handoff, and launch support.' },
];

export default function ProcessPage() {
  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Process</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">No surprises. No delays. No vanishing acts.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Here’s exactly how every project runs at Wired Creations, from brief to launch.</p>

          <div className="mt-14 space-y-6">
            {phases.map((phase) => (
              <div key={phase.title} className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Phase</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">{phase.title}</h2>
                  </div>
                  <div className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">{phase.timeline}</div>
                </div>
                <p className="mt-4 text-slate-300">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-navy-900/70 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white">Our process keeps your project moving.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">Every step is documented and shared, so you always know what’s next and what to expect.</p>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
