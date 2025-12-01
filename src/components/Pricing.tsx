import { Check } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

interface PricingProps {
  onNavigate: (section: string) => void;
  data: {
    heading: {
      headingP1: string;
      headingP2: string;
    };
    subHeading: string;
    plans: {
      name: string;
      price: string;
      description: string;
      badge?: string;
      highlight?: boolean;
      features: string[];
      cta: string;
    }[];
    specialSection: {
      question: string;
      answer: string;
      actionButton: string;
    };
  };
}

export const Pricing = ({ onNavigate, data }: PricingProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const navigate = useNavigate()

  return (
    <section
      ref={ref}
      id="pricing"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-black">{data.heading.headingP1}</span>
            <span className="text-amber-800">{data.heading.headingP2}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            {data.subHeading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? "animate-fadeInUp" : "opacity-0"
              } ${plan.highlight ? "md:scale-105" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}

              <div
                className={`h-full rounded-xl border-2 transition-all duration-500 p-8 flex flex-col ${
                  plan.highlight
                    ? "border-amber-800 bg-gradient-to-br from-amber-50 to-white shadow-2xl"
                    : "border-gray-200 bg-white hover:shadow-lg"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-black">
                    {plan.price}
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    Contact for quote
                  </p>
                </div>

                <button
                  onClick={() => onNavigate("contact")}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlight
                      ? "bg-black text-white hover:bg-gray-800"
                      : "border-2 border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-gray-900 rounded-xl p-8 text-center transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.45s" }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            {data.specialSection.question}
          </h3>
          <p className="text-gray-300 mb-6">
            {data.specialSection.answer}
          </p>
          <button
            onClick={() => {
              navigate("/meeting")
            }}
            className="px-8 py-3 bg-amber-800 text-white rounded-lg font-semibold hover:bg-amber-900 transition-all"
          >
            {data.specialSection.actionButton}
          </button>
        </div>
      </div>
    </section>
  );
};
