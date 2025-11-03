import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationTime = 0;

    const drawCube = (x: number, y: number, size: number, rotX: number, rotY: number, rotZ: number) => {
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
        let x = vx, y = vy, z = vz;

        const xx = x, yy = y * cos(rotX) - z * sin(rotX), zz = y * sin(rotX) + z * cos(rotX);
        x = xx;
        y = yy;
        z = zz;

        const xx2 = x * cos(rotY) + z * sin(rotY), yy2 = y, zz2 = -x * sin(rotY) + z * cos(rotY);
        x = xx2;
        y = yy2;
        z = zz2;

        const xx3 = x * cos(rotZ) - y * sin(rotZ), yy3 = x * sin(rotZ) + y * cos(rotZ), zz3 = z;

        const scale = 300 / (300 + zz3);
        return [
          x * size + x * 0.5,
          y * size + y * 0.5,
          zz3,
          scale,
        ];
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

      ctx!.strokeStyle = 'rgba(180, 83, 9, 0.6)';
      ctx!.lineWidth = 2;

      edges.forEach(([start, end]) => {
        const [x1, y1, , scale1] = rotatedVertices[start];
        const [x2, y2, , scale2] = rotatedVertices[end];

        ctx!.beginPath();
        ctx!.moveTo(x + x1 * scale1, y + y1 * scale1);
        ctx!.lineTo(x + x2 * scale2, y + y2 * scale2);
        ctx!.stroke();
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationTime += 0.015;

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
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: '#fafafa' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-black">Craft Your</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-amber-700">
              Digital Future
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your vision into reality with stunning web design and development.
            From sleek portfolios to full-featured applications, we deliver excellence.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:scale-105 flex items-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all"
            >
              View Portfolio
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-amber-800">50+</div>
            <p className="text-gray-600 text-sm">Projects Delivered</p>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-amber-800">30+</div>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-amber-800">5+</div>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-pulse-soft">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};
