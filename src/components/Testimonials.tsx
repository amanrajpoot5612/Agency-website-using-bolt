import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: 'Client Name',
      role: 'Company/Position',
      content: 'Add your testimonial here. Share what your clients say about working with you.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Client Name',
      role: 'Company/Position',
      content: 'Add your testimonial here. Share what your clients say about working with you.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
    {
      name: 'Client Name',
      role: 'Company/Position',
      content: 'Add your testimonial here. Share what your clients say about working with you.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    },
  ];

  return (
    <section ref={ref} id="testimonials" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-black">What Our</span>
            <span className="text-amber-800"> Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Don't just take our word for it. Hear directly from our satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-700 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-800 text-amber-800" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>

              <div className="flex items-center gap-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
