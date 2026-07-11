// CHANGE REASON: Convert the nav to route-based links for the new multi-page architecture.
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import data from '../Data/Data.json';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const copy = data.siteCopy.navigation;
  const links = data.footer.sections.quick.links.slice(0, 1).concat(copy.links).map((link) => ({ to: 'path' in link ? link.path : '/', label: link.label }));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 transition-shadow duration-300 ${
          isScrolled ? 'shadow-2xl shadow-cyan-500/10' : ''
        }`}
      >
        <div
          className={`mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-colors ${
            isScrolled ? 'bg-navy-950/95 backdrop-blur-xl' : 'bg-navy-950/85 backdrop-blur-lg'
          }`}
        >
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
          >
            <span className="text-white">{data.siteCopy.brand.first}</span>
            <span className="text-cyan-400">{data.siteCopy.brand.second}</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all ${
                    isActive ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300 hover:text-cyan-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/start"
              className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-navy-950 transition hover:bg-cyan-500 md:inline-flex"
            >
              {copy.cta}
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-cyan-300 hover:text-cyan-100 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={copy.toggleMenuLabel}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label={copy.mobileNavigationLabel} className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/95 px-8 pt-8 backdrop-blur-xl md:hidden">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-white">{copy.menu}</div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/5 p-3 text-cyan-400 transition hover:bg-white/10"
              aria-label={copy.closeMenuLabel}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mt-12 space-y-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full rounded-3xl border border-white/5 px-5 py-3 text-left text-xl font-semibold transition-colors ${
                    isActive ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:text-cyan-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <Link
            to="/start"
            className="mt-10 inline-flex w-full justify-center rounded-full bg-cyan-400 px-6 py-4 text-center text-lg font-semibold text-navy-950 transition hover:bg-cyan-500"
            onClick={() => setIsOpen(false)}
          >
            {copy.cta}
          </Link>
        </div>
      )}
    </>
  );
};
