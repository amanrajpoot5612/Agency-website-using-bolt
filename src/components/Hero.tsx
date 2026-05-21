// CHANGE REASON: Rework the hero into a left-aligned, proof-oriented layout with a stronger value headline and softer canvas atmosphere.
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  onNavigate: (section: string) => void;
  data: {
    heading: {
      headingP1: string;
      headingP2: string;
    };
    subHeading: string;
    buttons: {
      button1: string;
      button2: string;
    };
    matrices: {
      label: string;
      number: string;
    }[];
  };
}

export const Hero = ({ onNavigate, data }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationTime = 0;

    const drawCube = (
      x: number,
      y: number,
      size: number,
      rotX: number,
      rotY: number,
      rotZ: number
    ) => {
      const cos = Math.cos;
      const sin = Math.sin;

      const vertices = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ];

      const rotatedVertices = vertices.map(([vx, vy, vz]) => {
        let x = vx,
          y = vy,
          z = vz;

        const xx = x,
          yy = y * cos(rotX) - z * sin(rotX),
          zz = y * sin(rotX) + z * cos(rotX);
        x = xx;
        y = yy;
        z = zz;

        const xx2 = x * cos(rotY) + z * sin(rotY),
          yy2 = y,
          zz2 = -x * sin(rotY) + z * cos(rotY);
        x = xx2;
        y = yy2;
        z = zz2;

        const xx3 = x * cos(rotZ) - y * sin(rotZ),
          yy3 = x * sin(rotZ) + y * cos(rotZ),
          zz3 = z;
        x = xx3;
        y = yy3;
        z = zz3;

        const scale = 300 / (300 + z);
        return [x * size + x * 0.5, y * size + y * 0.5, z, scale];
      });

      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];

      ctx.strokeStyle = "rgba(0, 217, 255, 0.45)";
      ctx.lineWidth = 1.6;

      edges.forEach(([start, end]) => {
        const [x1, y1, , scale1] = rotatedVertices[start];
        const [x2, y2, , scale2] = rotatedVertices[end];

        ctx.beginPath();
        ctx.moveTo(x + x1 * scale1, y + y1 * scale1);
        ctx.lineTo(x + x2 * scale2, y + y2 * scale2);
        ctx.stroke();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(15, 20, 25, 0.88)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationTime += 0.012;

      drawCube(
        canvas.width / 2 - 100,
        canvas.height / 2,
        60,
        animationTime * 0.5,
        animationTime * 0.3,
        animationTime * 0.7
      );

      drawCube(
        canvas.width / 2 + 100,
        canvas.height / 2,
        60,
        -animationTime * 0.4,
        animationTime * 0.5,
        -animationTime * 0.6
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ backgroundColor: '#0f1419' }}
      />
      <div className="absolute inset-0 bg-navy-950/75" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl text-left">
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1 text-sm font-medium uppercase tracking-[0.24em] text-cyan-200">
              Product launches designed for founders
            </span>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
              <span>{data.heading.headingP1}</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
                {data.heading.headingP2}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {data.subHeading}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => navigate('/meeting')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:bg-cyan-500"
              >
                {data.buttons.button1}
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center justify-center rounded-full border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-navy-950"
              >
                {data.buttons.button2}
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {data.matrices.map((matrix, idx) => (
                <div
                  key={matrix.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  style={{ animationDelay: `${0.15 + idx * 0.15}s` }}
                >
                  <div className="text-3xl font-semibold text-cyan-400">{matrix.number}</div>
                  <p className="mt-2 text-sm text-slate-300">{matrix.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-navy-900/70 p-8 shadow-[0_30px_90px_rgba(0,217,255,0.08)]">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Featured workflow</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                Launch digital products faster with clarity and craftsmanship.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                We pair experience design with engineering discipline so your next product ships on time and looks premium.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Product-led
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                  Growth-ready
                </span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              <p className="font-semibold text-white">Why this works</p>
              <p className="mt-3 leading-6">
                Clean two-column hero messaging improves clarity while the canvas adds depth without competing with the headline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
