import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import data from '../Data/Data.json';
import type { Project } from '../types/content';

const projects = data.portfolio.projects as Project[];
const copy = data.siteCopy.workPage;
const common = data.siteCopy.common;

export default function WorkPage() {
  const [category, setCategory] = useState(common.all);
  const categories = [common.all, ...Array.from(new Set(projects.map((project) => project.category)))];
  const filteredProjects = category === common.all ? projects : projects.filter((project) => project.category === category);

  return (
    <PageLayout>
      <Seo {...data.siteCopy.seo.work} path="/work" />
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">{copy.eyebrow}</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{copy.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">{copy.intro}</p>
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-wrap gap-3" aria-label={data.siteCopy.homePortfolio.filterLabel}>
            {categories.map((label) => (
              <button type="button" key={label} aria-pressed={category === label} onClick={() => setCategory(label)} className={`rounded-full border px-4 py-2 text-sm transition ${category === label ? 'border-cyan-400 bg-cyan-400 text-navy-950' : 'border-cyan-500/30 bg-navy-900/70 text-cyan-200 hover:border-cyan-400'}`}>
                {label}
              </button>
            ))}
          </div>
          <p className="mb-8 text-sm text-slate-400" aria-live="polite">{copy.showing} {filteredProjects.length} {filteredProjects.length === 1 ? common.projectSingular : common.projectPlural}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-navy-950/80 p-6 shadow-2xl shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/20">
                <img src={project.image} alt={`${project.title} ${copy.previewSuffix}`} className="mb-6 h-64 w-full rounded-3xl object-cover" loading="lazy" />
                <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">{project.category}</span>
                <h2 className="mt-3 text-2xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-slate-400">{project.description}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-400">{project.year}</span>
                  <Link to={`/work/${project.slug}`} className="text-cyan-400 transition hover:text-white">{copy.viewCaseStudy}</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-cyan-400/20 bg-navy-900/70 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white">{copy.ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">{copy.ctaText}</p>
            <Link to="/start" className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">{copy.ctaButton}</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
