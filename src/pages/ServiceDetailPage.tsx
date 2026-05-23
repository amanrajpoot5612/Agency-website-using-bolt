import { useParams, Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import PageLayout from '../Layout/PageLayout';
import data from '../Data/Data.json';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const services = (data as any).servicesList || (data as any).services?.services || [];
  const service = slug ? services.find((s: any) => s.slug === slug || s.title?.toLowerCase().replace(/\s+/g, '-') === slug) : null;

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
        <p className="mt-6 text-lg leading-8 text-slate-300">{service.description || service.intro || ''}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {(service.features || service.bullets || []).map((item: string) => (
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
