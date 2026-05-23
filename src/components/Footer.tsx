// CHANGE REASON: Build the footer from structured data and add professional contact/social UX.
import data from "../Data/Data.json";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const socialIconMap: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footer = (data as any).footer;

  return (
    <footer className="bg-navy-950 text-white py-16 border-t border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">{footer.heading.headingP1}</span>
              <span className="text-cyan-400">{footer.heading.headingP2}</span>
            </h3>
            <p className="text-gray-400">{footer.subHeading}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{footer.sections.quick.heading}</h4>
            <ul className="space-y-2">
              {(footer.sections?.quick?.links || []).map((link: any) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{footer.sections.services.heading}</h4>
            <ul className="space-y-2">
              {(footer.sections?.services?.links || []).map((link: any) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">{footer.sections.getInTouch.heading}</h4>
            <ul className="space-y-3">
              {(footer.sections?.getInTouch?.links || []).map((link: any) => (
                <li key={link.label} className="flex items-center gap-2 text-gray-400">
                  {link.label.includes("@") ? (
                    <>
                      <Mail size={18} className="text-cyan-400" />
                      <a
                        href={link.href}
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </>
                  ) : link.href ? (
                    <>
                      <MapPin size={18} className="text-cyan-400" />
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </>
                  ) : (
                    <>
                      <Phone size={18} className="text-cyan-400" />
                      <span>{link.label}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; {currentYear} Wired Creations. All rights reserved.
            </p>

            <div className="flex gap-4">
              {(footer.social || []).map((social: any) => {
                const Icon = socialIconMap[social.label] || Facebook;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-navy-900 rounded-lg"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
