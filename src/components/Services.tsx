// CHANGE REASON: Turn services into a premium bento-style section with hierarchy and a stronger project-led layout.
import { Code2, Palette, Zap, Smartphone, Package, BarChart3, type LucideIcon } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface ServicesProps {
  data: {
    heading: {
      headingP1: string;
      headingP2: string;
    };
    subHeading: string;
    services: {
      icon: string;
      title: string;
      description: string;
    }[];
  };
}

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Zap,
  Smartphone,
  Package,
  BarChart3,
};

export const Services = ({ data }: ServicesProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="services" className="min-h-screen bg-navy-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80 mb-4">
            What we ship
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">{data.heading.headingP1}</span>
            <span className="text-cyan-400">{data.heading.headingP2}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mt-4">{data.subHeading}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 lg:grid-rows-2">
          {data.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const largeCard = index === 0;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-navy-900/95 to-navy-800/80 p-8 shadow-[0_35px_90px_rgba(0,217,255,0.08)] transition duration-500 transform hover:-translate-y-1 hover:shadow-cyan-400/20 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                } ${largeCard ? "lg:col-span-2 lg:row-span-2" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-navy-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-7">{service.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                  <span>Explore more</span>
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
