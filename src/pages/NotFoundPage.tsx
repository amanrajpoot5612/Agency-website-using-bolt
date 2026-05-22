import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';

export default function NotFoundPage() {
  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <p className="text-lg uppercase tracking-[0.32em] text-cyan-400">404</p>
          <h1 className="mt-6 text-6xl font-bold text-white">Lost in the wires.</h1>
          <p className="mt-6 text-lg text-slate-300">The page you are looking for doesn’t exist. Let’s get you back to a useful page.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">Home</Link>
            <Link to="/work" className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-300 hover:text-navy-950">See our work</Link>
            <Link to="/start" className="rounded-full border border-cyan-400 px-8 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-300 hover:text-navy-950">Start a project</Link>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
