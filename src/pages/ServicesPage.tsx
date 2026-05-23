import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';
import { Link } from 'react-router-dom';
import data from '../Data/Data.json';

export default function ServicesPage() {
  const services = (data as any).servicesList || (data as any).services?.services || [];

  return (
    <PageLayout>
      <section className="bg-navy-950 pb-20">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">Services</p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">What we build.</h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">Strategy, design, and development tailored to ambitious businesses and early-stage products.</p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service: any) => (
              <Link
                key={service.slug || service.title}
                to={`/services/${service.slug || service.title?.toLowerCase().replace(/\s+/g, '-')}`}
                className="group rounded-[2rem] border border-cyan-400/10 bg-navy-950/70 p-8 transition hover:-translate-y-1 hover:border-cyan-400/20"
              >
                <span className="text-sm uppercase tracking-[0.32em] text-cyan-400">Service</span>
                <h2 className="mt-4 text-2xl font-semibold text-white">{service.title}</h2>
                <p className="mt-3 text-slate-400">{service.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-cyan-400 transition group-hover:text-white">What’s included →</span>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-navy-900/70 p-10 text-center">
            <h2 className="text-3xl font-semibold text-white">Not sure which service fits your project?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">We often combine design and development work into a single package for faster delivery and stronger outcomes.</p>
            <Link
              to="/start"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-300"
            >
              Book a free 30-min call
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </PageLayout>
  );
}
