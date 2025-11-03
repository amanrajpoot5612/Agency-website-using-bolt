import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-black">About</span>
              <span className="text-amber-800"> Wired Creations</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded with a passion for digital excellence, Wired Creations is your partner in transforming
              ideas into stunning web experiences. We blend creativity with technical expertise to deliver solutions
              that not only look beautiful but perform exceptionally.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our team of designers and developers are committed to understanding your business goals and
              creating digital solutions that drive real results. Whether you're a startup or an established brand,
              we're here to help you succeed online.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses through innovative web design and development, creating digital products
                  that inspire and convert.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted web development partner for businesses looking to establish a strong
                  digital presence and achieve their goals.
                </p>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
            isVisible ? 'animate-slideInRight' : 'opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
              <div className="text-4xl font-bold text-amber-800 mb-2">5+</div>
              <p className="text-amber-900">Years of Experience</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <p className="text-gray-700">Successful Projects</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-black mb-2">30+</div>
              <p className="text-gray-700">Happy Clients</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
              <div className="text-4xl font-bold text-amber-800 mb-2">100%</div>
              <p className="text-amber-900">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
