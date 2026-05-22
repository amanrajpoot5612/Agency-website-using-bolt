import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">About</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">A small studio that ships big products.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Founded with a passion for digital excellence, Wired Creations blends design and development into projects that feel premium and launch-ready.</p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-white">Our mission</h2>
              <p className="mt-4 text-slate-300">To empower founders and teams with modern digital products that look great and convert.</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-white">Our values</h2>
              <ul className="mt-4 space-y-4 text-slate-300">
                <li>Ship fast, iterate fast.</li>
                <li>Be transparent at every step.</li>
                <li>Build for durability, not for complexity.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              { label: 'Projects', value: '40+' },
              { label: 'Years', value: '1+' },
              { label: 'Clients', value: '10+' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 text-center">
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
