import { useParams, Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { Seo } from '../components/Seo';
import data from '../Data/Data.json';
import type { Service } from '../types/content';

const services = data.services.services as Service[];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return (
    <PageLayout>
      <Seo title="Service Not Found" description="The requested Wired Creations service is unavailable." path={`/services/${slug || ''}`} noindex />
      <section className="mx-auto max-w-5xl px-4 py-28 text-center"><h1 className="text-4xl font-bold text-white">Service not found</h1><Link to="/services" className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-semibold text-navy-950">Back to Services</Link></section>
    </PageLayout>
  );

  return (
    <PageLayout>
      <Seo title={service.title} description={service.description} path={`/services/${service.slug}`} />
      <article className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Service Detail</p>
        <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">{service.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.description}</p>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <section><h2 className="text-2xl font-semibold text-white">What you receive</h2><ul className="mt-5 space-y-3 text-slate-300">{service.deliverables.map((item) => <li key={item}>✓ {item}</li>)}</ul></section>
          <section><h2 className="text-2xl font-semibold text-white">How we work</h2><ol className="mt-5 space-y-3 text-slate-300">{service.process.map((item, index) => <li key={item}><span className="mr-2 text-cyan-400">{index + 1}.</span>{item}</li>)}</ol></section>
        </div>
        <section className="mt-14"><h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2><div className="mt-5 space-y-4">{service.faqs.map((faq) => <div key={faq.question} className="rounded-3xl border border-cyan-400/10 bg-navy-900/70 p-6"><h3 className="font-semibold text-white">{faq.question}</h3><p className="mt-2 text-slate-300">{faq.answer}</p></div>)}</div></section>
        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-navy-900/70 p-10 text-center"><h2 className="text-2xl font-semibold text-white">Want to discuss this service?</h2><Link to="/start" className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3 font-semibold text-navy-950">Start a Project</Link></div>
      </article>
    </PageLayout>
  );
}
