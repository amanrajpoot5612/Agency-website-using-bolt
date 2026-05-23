import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';
import { Link } from 'react-router-dom';
import data from '../Data/Data.json';

export default function WorkPage() {
  const projects = (data as any).projects || (data as any).portfolio?.projects || [];

  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Our work</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Work that speaks for itself.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            40+ launches across web, product, and e-commerce. Review our case studies and find the right fit for your project.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-3 text-sm">
            {['All', 'Web Design', 'Web App', 'Mobile', 'Branding', 'E-commerce', 'SaaS'].map((label) => (
              <button
                key={label}
                className="rounded-full border border-cyan-500/30 bg-navy-900/70 px-4 py-2 text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project: any) => (
              <article key={project.slug || project.id || project.title} className="overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-navy-950/80 p-6 shadow-2xl shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/20">
                <div className="mb-6 h-64 rounded-3xl bg-slate-800" style={{backgroundImage: project.thumbnail ? `url(${project.thumbnail})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                <div className="space-y-3">
                  <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">Project</span>
                  <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                  <p className="text-slate-400">{project.description || project.industry || ''}</p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-sm text-slate-400">{(project.industry || project.category?.[0] || '')} · {project.year || ''}</div>
                  <Link to={`/work/${project.slug || project.id || ''}`} className="text-cyan-400 transition hover:text-white">
                    View case study →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-navy-900/70 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white">Ready to talk through your next digital product?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">If you want work that converts and feels premium, let’s plan the right path together.</p>
            <Link
              to="/start"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300"
            >
              Let’s Talk →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
