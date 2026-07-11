import { useParams, Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import data from '../Data/Data.json';
import type { Project } from '../types/content';

const projects = data.portfolio.projects as Project[];

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return (
    <PageLayout>
      <Seo title="Case Study Not Found" description="The requested Wired Creations case study is unavailable." path={`/work/${slug || ''}`} noindex />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Case study not found</h1>
        <p className="mt-6 text-lg text-slate-300">Check the work index for available projects.</p>
        <Link to="/work" className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-navy-950">Back to Work</Link>
      </section>
    </PageLayout>
  );

  return (
    <PageLayout>
      <Seo title={`${project.title} Case Study`} description={project.description} path={`/work/${project.slug}`} />
      <article className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">{project.category} · {project.year}</p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">{project.overview}</p>
        <img src={project.image} alt={`${project.title} interface`} className="mt-12 h-auto w-full rounded-[2rem] border border-cyan-400/10" />
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <section><h2 className="text-2xl font-semibold text-white">The challenge</h2><p className="mt-4 leading-7 text-slate-300">{project.challenge}</p></section>
          <section><h2 className="text-2xl font-semibold text-white">Our approach</h2><p className="mt-4 leading-7 text-slate-300">{project.approach}</p></section>
          <section><h2 className="text-2xl font-semibold text-white">Deliverables</h2><ul className="mt-4 space-y-3 text-slate-300">{project.deliverables.map((item) => <li key={item}>✓ {item}</li>)}</ul></section>
          <section><h2 className="text-2xl font-semibold text-white">Outcomes</h2><ul className="mt-4 space-y-3 text-slate-300">{project.outcomes.map((item) => <li key={item}>✓ {item}</li>)}</ul></section>
        </div>
        <div className="mt-16 flex flex-wrap gap-4"><Link to="/work" className="rounded-full border border-cyan-400 px-6 py-3 font-semibold text-cyan-400">Back to Work</Link><Link to="/start" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-navy-950">Start a project</Link></div>
      </article>
    </PageLayout>
  );
}
