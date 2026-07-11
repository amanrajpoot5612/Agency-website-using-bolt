import { Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import data from '../Data/Data.json';

export default function NotFoundPage() {
  const copy = data.siteCopy.notFoundPage;
  return (
    <PageLayout>
      <Seo {...data.siteCopy.seo.notFound} path={window.location.pathname} noindex />
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <p className="text-lg uppercase tracking-[0.32em] text-cyan-400">{copy.code}</p>
          <h1 className="mt-6 text-6xl font-bold text-white">{copy.title}</h1>
          <p className="mt-6 text-lg text-slate-300">{copy.text}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">{copy.home}</Link>
            <Link to="/work" className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-300 hover:text-navy-950">{copy.work}</Link>
            <Link to="/start" className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-300 hover:text-navy-950">{copy.start}</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
