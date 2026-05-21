import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";

interface MeetingProps {
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
    buttons: {
      button1: {
        label: string;
      };
    };
  };
}

export const Meeting = ({ data }: MeetingProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(true);

  return (
    <section ref={ref} id="meeting" className="min-h-screen bg-navy-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">{data.heading.headingP1}</span>
            <span className="text-cyan-400">{data.heading.headingP2}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">{data.subHeading}</p>
        </div>

        {/* Iframe Wrapper + Skeleton */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-cyan-400/30">
          {/* Skeleton Loader */}
          {loading && (
            <div className="absolute inset-0 bg-navy-900 animate-pulse rounded-lg flex items-center justify-center">
              <h1 className="text-xl font-semibold text-cyan-400">
                Loading Calendar...
              </h1>
            </div>
          )}

          {/* Calendar Iframe */}
          <iframe
            src="https://calendar.app.google/rBQhrQStegkLu6QU8"
            className={`w-full h-full border-0 transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            allowFullScreen
            loading="lazy"
            onLoad={() => setLoading(false)}
          />
        </div>

        {/* Button */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-navy-950 transition-all">
            <a
              href="https://calendar.app.google/rBQhrQStegkLu6QU8"
              target="_blank"
              rel="noreferrer"
            >
              {data.buttons.button1.label}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
