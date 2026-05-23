import { useParams, Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';
import data from '../Data/Data.json';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const projects = (data as any).projects || (data as any).portfolio?.projects || [];
  const project = slug ? projects.find((p: any) => p.slug === slug || p.id === Number(slug)) : undefined;

  if (!project) {
    return (
      <PageLayout>
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Case Study</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{slug ? slug.replace(/[-]/g, ' ') : 'Unknown project'}</h1>
          <p className="mt-6 text-lg text-slate-300">This case study cannot be found. Check the work index for available projects.</p>
          <div className="mt-10 flex gap-4">
            <Link to="/work" className="rounded-full border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10 hover:text-white">Back to Work</Link>
            <Link to="/start" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">Start a project</Link>
          </div>
        </section>
        <Footer />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Case Study</p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{project.title}</h1>
        <p className="mt-6 text-lg text-slate-300">{project.description || project.industry || 'Project details coming soon.'}</p>
        <div className="mt-10 flex gap-4">
          <Link to="/work" className="rounded-full border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500/10 hover:text-white">Back to Work</Link>
          <Link to="/start" className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">Start a project</Link>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
