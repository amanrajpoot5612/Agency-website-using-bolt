import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import data from '../Data/Data.json';

export default function AboutPage() {
  const copy = data.siteCopy.aboutPage;
  return (
    <PageLayout>
      <Seo {...data.siteCopy.seo.about} path="/about" />
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">{copy.eyebrow}</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{copy.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{copy.intro}</p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-white">{copy.missionTitle}</h2>
              <p className="mt-4 text-slate-300">{copy.missionText}</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 shadow-2xl shadow-cyan-500/5">
              <h2 className="text-2xl font-semibold text-white">{copy.valuesTitle}</h2>
              <ul className="mt-4 space-y-4 text-slate-300">
                {copy.values.map((value) => <li key={value}>{value}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {data.about.matrices.slice(0, 3).map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-8 text-center">
                <p className="text-4xl font-bold text-white">{stat.number}</p>
                <p className="mt-2 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
