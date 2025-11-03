import { ExternalLink, Maximize2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Portfolio = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      id: 1,
      title: 'Project Title Here',
      category: 'Web Design',
      description: 'Add your project description here',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Project Title Here',
      category: 'Development',
      description: 'Add your project description here',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'Project Title Here',
      category: 'Full Stack',
      description: 'Add your project description here',
      image: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'Project Title Here',
      category: 'Web Design',
      description: 'Add your project description here',
      image: 'https://images.pexels.com/photos/3894196/pexels-photo-3894196.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'Project Title Here',
      category: 'Development',
      description: 'Add your project description here',
      image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'Project Title Here',
      category: 'E-commerce',
      description: 'Add your project description here',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section ref={ref} id="portfolio" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-black">Our</span>
            <span className="text-amber-800"> Work</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Explore our portfolio of successful projects. From custom websites to complex applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-amber-400 text-sm font-semibold mb-2">{project.category}</div>
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors">
                  <ExternalLink size={16} />
                  View Project
                </button>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-white rounded-full p-3 hover:bg-amber-800 hover:text-white transition-all cursor-pointer">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={{ animationDelay: '0.6s' }}>
          <button className="px-8 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
