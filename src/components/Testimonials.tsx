import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TestimonialsProps {
  onNavigate: (section: string) => void;
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

export const Testimonials = ({ onNavigate, data }: TestimonialsProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="testimonials" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-black">{data.heading.headingP1}</span>
            <span className="text-amber-800">{data.heading.headingP2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            {data.subHeading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {data.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-700 ${
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
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-800 text-amber-800" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>

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
