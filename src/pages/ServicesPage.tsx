import { Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import data from '../Data/Data.json';
import type { Service } from '../types/content';

const services = data.services.services as Service[];

export default function ServicesPage() {
  return (
    <PageLayout>
      <Seo title="Services" description="Explore portfolio, website, landing page, mobile app, CRM, and analytics services from Wired Creations." path="/services" />
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Services</p>
        <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Built around your next milestone.</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">Focused design and engineering services for launches, growth, and better customer workflows.</p>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-3xl border border-cyan-400/10 bg-navy-900/70 p-7">
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-4 text-slate-300">{service.description}</p>
              <Link to={`/services/${service.slug}`} className="mt-6 inline-flex text-cyan-400 hover:text-white">Explore service →</Link>
            </article>
          ))}
        </div>
        <div className="mt-14 text-center"><Link to="/start" className="inline-flex rounded-full bg-cyan-400 px-8 py-3 font-semibold text-navy-950">Discuss your project</Link></div>
      </section>
    </PageLayout>
  );
}
