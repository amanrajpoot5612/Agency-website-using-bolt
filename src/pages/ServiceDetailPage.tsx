import { useParams, Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';

const serviceData: Record<string, { title: string; intro: string; bullets: string[] }> = {
  'web-design': {
    title: 'Web Design',
    intro: 'Design systems, interface strategy, and polished visual direction for websites and landing pages.',
    bullets: ['User research and wireframes', 'High-fidelity UI in Figma', 'Responsive design across devices', 'Developer-ready handoff files'],
  },
  'web-development': {
    title: 'Web Development',
    intro: 'Build fast, modern websites and web apps with production-ready React, CMS, and integrations.',
    bullets: ['Custom React/TypeScript front ends', 'CMS and content workflows', 'Performance optimization', 'QA and launch support'],
  },
  'ecommerce': {
    title: 'E-commerce',
    intro: 'Shopify and custom commerce sites designed for conversions and smooth checkouts.',
    bullets: ['Store setup and theming', 'Product catalog design', 'Payments and analytics', 'Launch and support'],
  },
  'product-design': {
    title: 'Product Design',
    intro: 'SaaS dashboards, mobile apps, and product workflows designed for real user outcomes.',
    bullets: ['Customer journey mapping', 'Interactive prototypes', 'Design system delivery', 'Usability-driven iteration'],
  },
  'brand-identity': {
    title: 'Brand Identity',
    intro: 'Visual identity systems that align your product story with a professional market presence.',
    bullets: ['Logo and visual system', 'Typography and color palette', 'Brand expression guidelines', 'Asset package for launch'],
  },
  'support-retainer': {
    title: 'Support Retainer',
    intro: 'Ongoing website care, updates, and optimization with a predictable monthly plan.',
    bullets: ['Bug fixes and updates', 'Performance monitoring', 'Security patching', 'Priority support'],
  },
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <PageLayout>
        <section className="mx-auto max-w-5xl px-4 py-28 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white">Service not found</h1>
          <p className="mt-4 text-slate-300">The service you requested does not exist. Please return to the services list.</p>
          <Link to="/services" className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">
            Back to Services
          </Link>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Service Detail</p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white">{service.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">{service.intro}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {service.bullets.map((item) => (
            <div key={item} className="rounded-3xl border border-cyan-400/10 bg-navy-950/70 p-6">
              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-cyan-400/20 bg-navy-900/70 p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">Want to discuss this service for your project?</h2>
          <p className="mt-3 text-slate-300">We can tailor the scope to your product, timeline, and budget.</p>
          <Link to="/start" className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300">
            Start a Project
          </Link>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
