import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../Data/Data.json';
export const Footer = () => <footer className="site-footer"><div className="shell">
  <div className="footer-main"><div><p className="eyebrow">Wired Creations</p><h2>Good ideas deserve<br/><em>a great launch.</em></h2></div><div><p>Have a product, website, or brand challenge?</p><Link to="/start">Let’s talk <ArrowUpRight/></Link></div></div>
  <div className="footer-links"><div><span>Explore</span>{data.footer.sections.quick.links.map(item => <Link key={item.label} to={item.path || '/'}>{item.label}</Link>)}</div><div><span>Services</span>{data.footer.sections.services.links.slice(0,4).map(item => <Link key={item.label} to={item.path || '/services'}>{item.label}</Link>)}</div><div><span>Connect</span>{data.footer.social.map(item => <a key={item.label} href={item.url} target="_blank" rel="noreferrer">{item.label}</a>)}</div></div>
  <div className="footer-bottom"><span>© {new Date().getFullYear()} Wired Creations</span><span>Independent digital studio / India</span><span>All rights reserved</span></div>
  </div></footer>;
