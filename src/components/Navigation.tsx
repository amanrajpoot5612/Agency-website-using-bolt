import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import data from '../Data/Data.json';

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const copy = data.siteCopy.navigation;
  const links = data.footer.sections.quick.links.slice(0, 1).concat(copy.links).map((item) => ({ to: 'path' in item ? item.path : '/', label: item.label }));
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 12); fn(); addEventListener('scroll', fn, { passive: true }); return () => removeEventListener('scroll', fn); }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner shell">
        <Link to="/" className="wordmark" aria-label="Wired Creations home"><span>W/</span> WIRED<small>CREATIONS</small></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}</nav>
        <Link to="/start" className="header-cta">Start a project <ArrowUpRight size={16}/></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
    {open && <div className="mobile-menu" role="dialog" aria-modal="true"><div className="mobile-links">{links.map((link, i) => <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.label}</NavLink>)}</div><Link className="button button-accent" to="/start" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={18}/></Link></div>}
  </>;
};
