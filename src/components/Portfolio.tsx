import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioProps { data: { heading: { headingP1: string; headingP2: string }; subHeading: string; projects: { id: number; slug?: string; title: string; category: string; description: string; image: string; year?: string }[]; buttons: { button1: { label: string } } }; }
export const Portfolio = ({ data }: PortfolioProps) => (
  <section id="portfolio" className="section work-section">
    <div className="shell">
      <header className="section-head work-heading"><div><p className="eyebrow">Selected work / 2024—26</p><h2>{data.heading.headingP1}<em>{data.heading.headingP2}</em></h2></div><p>{data.subHeading}</p></header>
      <div className="project-grid">{data.projects.slice(0, 4).map((project, index) => <article className={`project-card project-${index + 1}`} key={project.id}>
        <Link to={project.slug ? `/work/${project.slug}` : '/work'} className="project-image"><img src={project.image} alt={`${project.title} project preview`} loading="lazy"/><span>View case study <ArrowUpRight size={18}/></span></Link>
        <div className="project-meta"><span>0{index + 1} / {project.category}</span><span>{project.year || '2026'}</span></div>
        <h3>{project.title}</h3><p>{project.description}</p>
      </article>)}</div>
      <Link to="/work" className="text-link">{data.buttons.button1.label} <ArrowUpRight size={18}/></Link>
    </div>
  </section>
);
