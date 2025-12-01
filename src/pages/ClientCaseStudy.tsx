import { useScrollAnimation } from "../hooks/useScrollAnimation";
export interface ClientCaseStudyProps {
  data: {
    heading: {
      headingP1: string;
      headingP2: string;
    };
    para: {
      para1: string;
      para2: string;
    };
    textSections: TextSection[];
    matrices: MatrixItem[];
  };
}

export interface TextSection {
  label: string;
  text: string;
}

export interface MatrixItem {
  label: string;
  number: string;
}

export const ClientCaseStudy = ({ data }: ClientCaseStudyProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} id="about" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-black">{data.heading.headingP1}</span>
              <span className="text-amber-800">{data.heading.headingP2}</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {data.para.para1}
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {data.para.para2}
            </p>
            <div className="space-y-4">
              {data.textSections.map((textSection) => {
                return (
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {textSection.label}
                    </h3>
                    <p className="text-gray-600">{textSection.text}</p>
                  </div>
                );
              })}
              {/* <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower businesses through innovative web design and
                  development, creating digital products that inspire and
                  convert.
                </p>
              </div> */}
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 ${
              isVisible ? "animate-slideInRight" : "opacity-0"
            }`}
          >
            {
              data.matrices.map((segment, idx) => (
                  (idx == 0 || idx == 3)
                    ? <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
              <div className="text-4xl font-bold text-amber-800 mb-2">{segment.number}</div>
              <p className="text-amber-900">{segment.label}</p>
            </div>
                    : 
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
              <div className="text-4xl font-bold text-black mb-2">{segment.number}</div>
              <p className="text-gray-700">{segment.label}</p>
            </div>
                  
              ))
            }
            {/* <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};