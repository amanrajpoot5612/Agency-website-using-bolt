import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesProps { data: { heading: { headingP1: string; headingP2: string }; subHeading: string; services: { slug?: string; title: string; description: string }[] }; }
export const Services = ({ data }: ServicesProps) => (
  <section id="services" className="section services-section">
    <div className="shell">
      <header className="section-head"><div><p className="eyebrow">Capabilities / 01—06</p><h2>{data.heading.headingP1}<em>{data.heading.headingP2}</em></h2></div><p>{data.subHeading} Strategy, design, and engineering stay connected from day one.</p></header>
      <div className="service-index">{data.services.map((service, index) => <Link to={service.slug ? `/services/${service.slug}` : '/services'} className="service-row" key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p><ArrowUpRight/></Link>)}</div>
    </div>
  </section>
);
