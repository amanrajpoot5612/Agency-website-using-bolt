import {
  Code2,
  Palette,
  Zap,
  Smartphone,
  Package,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
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
    <section ref={ref} id="services" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-black">{data.heading.headingP1}</span>
            <span className="text-amber-800">{data.heading.headingP2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">{data.subHeading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => {
            const Icon = iconMap[service.icon]; // ✅ FIX HERE

            return (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? "animate-fadeInUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 bg-amber-100 rounded-lg group-hover:bg-amber-800 transition-colors">
                  <Icon className="w-6 h-6 text-amber-800 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
