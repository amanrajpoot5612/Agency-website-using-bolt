import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";

interface MeetingProps {
  data: {
    heading: {
      headingP1: string;
      headingP2: string;
    };
    subHeading: string;
    buttons: {
      button1: {
        label: string;
      };
    };
  };
}

export const Meeting = ({ data }: MeetingProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [redirecting, setRedirecting] = useState(false);
  const bookingUrl = "https://calendar.app.google/rBQhrQStegkLu6QU8";

  const handleOpenLightMode = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.open(bookingUrl, '_blank', 'noopener,noreferrer');
      setRedirecting(false);
    }, 700);
  };

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

        {/* <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] relative"> */}
        <div className="grid gap-10 lg:grid-cols-1 relative">
          {redirecting && (
            <div className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-navy-950/95 p-6">
              <div className="w-full max-w-2xl rounded-3xl border border-cyan-400/30 bg-navy-900/95 p-8 text-center shadow-2xl shadow-cyan-500/20">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-300 mb-3">
                  Redirecting in light mode
                </p>
                <h3 className="text-3xl font-semibold text-white mb-4">
                  Opening the full booking page...
                </h3>
                <p className="text-slate-300 mb-6">
                  If the inline embed is hard to read, we are opening the scheduler separately in a new tab for the clearest booking experience.
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-cyan-400 px-6 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-navy-950"
                >
                  Open now in a new tab
                </a>
              </div>
            </div>
          )}

          <div className="space-y-8 rounded-3xl border border-cyan-400/15 bg-navy-900/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Use the embedded scheduling panel to quickly find available times. If the inline view looks compressed or hard to read, open the full calendar page instead.
              </p>
              <div className="grid gap-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span>30-minute consultation slots with Google Meet details included.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span>Times shown in India Standard Time (GMT+05:30).</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <span>For the best readability, open the full booking link in a separate tab.</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cyan-400 px-8 py-3 text-center text-cyan-400 transition hover:bg-cyan-400 hover:text-navy-950"
              >
                {data.buttons.button1.label}
              </a>
              <button
                type="button"
                onClick={handleOpenLightMode}
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-navy-950 transition hover:bg-cyan-300"
              >
                Open in separate tab (light-ready)
              </button>
            </div>
          </div>

          {/* <div className="relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-navy-950/80 shadow-2xl shadow-cyan-500/15">
            <div className="flex items-center justify-between border-b border-cyan-400/15 bg-navy-950/90 px-6 py-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Embedded Calendar</p>
                <p className="text-xs text-slate-400">Google scheduling experience</p>
              </div>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">IST</span>
            </div>

            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-navy-950/90 backdrop-blur-sm">
                <h1 className="text-xl font-semibold text-cyan-400">
                  Loading Calendar...
                </h1>
              </div>
            )}

            <iframe
              src={bookingUrl}
              className={`w-full min-h-[680px] border-0 transition-opacity duration-500 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              allowFullScreen
              loading="lazy"
              onLoad={() => setLoading(false)}
              title="Wired Creations booking calendar"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
