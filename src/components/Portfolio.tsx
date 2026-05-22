// CHANGE REASON: Add portfolio filters and a stronger case study grid so visitors can quickly find relevant work.
import { ExternalLink, Maximize2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useMemo, useState } from "react";

interface PortfolioProps {
  data: {
    heading: {
      headingP1: string;
      headingP2: string;
    };
    subHeading: string;
    projects: {
      id: number;
      title: string;
      category: string;
      description: string;
      image: string;
    }[];
    buttons:{
      button1 : {
        label: string;
      }
    }
  };
}




export const Portfolio = ({ data }: PortfolioProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(data.projects.map((project) => project.category))),
    ],
    [data.projects]
  );

  const visibleProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? data.projects
        : data.projects.filter((project) => project.category === selectedCategory),
    [data.projects, selectedCategory]
  );

  return (
    <section ref={ref} id="portfolio" className="min-h-screen bg-navy-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80 mb-4">
            Selected projects
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">{data.heading.headingP1}</span>
            <span className="text-cyan-400">{data.heading.headingP2}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mt-4">
            {data.subHeading}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                selectedCategory === category
                  ? 'border-cyan-400 bg-cyan-400 text-navy-950'
                  : 'border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400 hover:text-cyan-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden bg-navy-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/20 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950 to-transparent p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-cyan-400 text-sm font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <button className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-cyan-400 rounded-full p-3 hover:bg-cyan-500 hover:text-navy-950 transition-all cursor-pointer">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-navy-900/80 px-8 py-8 text-center sm:flex-row sm:text-left transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Ready for your next launch?</p>
            <p className="mt-3 text-lg text-gray-300 max-w-2xl">
              Browse the work we delivered for founders, teams, and ambitious brands.
            </p>
          </div>
          <button className="rounded-full border border-cyan-400 bg-cyan-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-500">
            {data.buttons.button1.label}
          </button>
        </div>
      </div>
    </section>
  );
};
