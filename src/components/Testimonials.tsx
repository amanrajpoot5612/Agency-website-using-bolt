import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TestimonialsProps {
  data: {
    heading: {
      headingP1: string;
      headingP2: string;
    };
    subHeading: string;
    testimonials: {
      name: string;
      role: string;
      content: string;
      rating: number;
      image: string;
    }[];
  };
}

export const Testimonials = ({ data }: TestimonialsProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="testimonials" className="min-h-screen bg-gradient-to-b from-navy-950 to-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">{data.heading.headingP1}</span>
            <span className="text-cyan-400">{data.heading.headingP2}</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            {data.subHeading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {data.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-8 bg-navy-900 border border-cyan-400/30 rounded-xl hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-700 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 py-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">{testimonial.content}</p>

              {/* <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
