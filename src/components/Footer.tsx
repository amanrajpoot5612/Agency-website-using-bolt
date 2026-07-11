import { Instagram, Linkedin, Mail, MapPin, Phone, Pin, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import data from '../Data/Data.json';
import type { FooterData } from '../types/content';

const socialIconMap: Record<string, LucideIcon> = { Linkedin, Instagram, Pinterest: Pin };
const footer = data.footer as FooterData;

export const Footer = () => (
  <footer className="border-t border-cyan-400/20 bg-navy-950 py-16 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-12 grid gap-8 md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-2xl font-bold">
            {footer.heading.headingP1}<span className="text-cyan-400">{footer.heading.headingP2}</span>
          </h2>
          <p className="text-gray-400">{footer.subHeading}</p>
        </div>
        {[footer.sections.quick, footer.sections.services].map((section) => (
          <div key={section.heading}>
            <h2 className="mb-4 font-semibold text-white">{section.heading}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.path || '/'} className="text-gray-400 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="mb-4 font-semibold text-white">{footer.sections.getInTouch.heading}</h2>
          <ul className="space-y-3">
            {footer.sections.getInTouch.links.map((link) => {
              const isEmail = link.href?.startsWith('mailto:');
              const isPhone = link.href?.startsWith('tel:');
              const Icon = isEmail ? Mail : isPhone ? Phone : MapPin;
              return (
                <li key={link.label} className="flex items-start gap-2 text-gray-400">
                  <Icon size={18} aria-hidden="true" className="mt-1 shrink-0 text-cyan-400" />
                  <a href={link.href} target={!isEmail && !isPhone ? '_blank' : undefined} rel={!isEmail && !isPhone ? 'noreferrer' : undefined} className="transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 border-t border-cyan-400/20 pt-8 md:flex-row">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Wired Creations. All rights reserved.</p>
        <div className="flex gap-4">
          {footer.social.map((social) => {
            const Icon = socialIconMap[social.label] || Pin;
            return (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer" aria-label={`Wired Creations on ${social.label}`} className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-navy-900 hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
                <Icon size={20} aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </footer>
);
