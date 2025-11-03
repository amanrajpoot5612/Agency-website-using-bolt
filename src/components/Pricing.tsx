import { Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PricingProps {
  onNavigate: (section: string) => void;
}

export const Pricing = ({ onNavigate }: PricingProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const plans = [
    {
      name: 'Basic',
      price: 'Custom',
      description: 'Perfect for getting started',
      badge: 'Popular for Startups',
      features: [
        'Predefined Design Templates',
        '5-10 Page Website',
        'Mobile Responsive',
        'Basic SEO Setup',
        'Contact Form',
        'SSL Certificate',
        '3 Month Support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Premium',
      price: 'Custom',
      description: 'Ideal for growing businesses',
      badge: 'Most Popular',
      highlight: true,
      features: [
        'Custom Design & Customization',
        '10-20 Page Website',
        'Mobile Responsive',
        'Advanced SEO Optimization',
        'Contact & Newsletter Forms',
        'SSL Certificate',
        'Small Animations & Transitions',
        'Custom Color Palette',
        '6 Month Support',
        'Analytics Integration',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For ambitious brands',
      badge: 'Ultimate Control',
      features: [
        'Fully Custom Design',
        'Unlimited Pages',
        'Mobile & Tablet Responsive',
        'Advanced SEO & Performance',
        'Advanced Forms & Integrations',
        'SSL Certificate',
        'Complex 3D Animations',
        'Full Custom Branding',
        'Custom Color Palette',
        'E-commerce Integration',
        '1 Year Support',
        'Priority Support',
      ],
      cta: 'Get Started',
    },
  ];

  return (
    <section ref={ref} id="pricing" className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-black">Transparent</span>
            <span className="text-amber-800"> Pricing</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Choose the perfect plan for your needs. All plans include professional support and quality assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              } ${plan.highlight ? 'md:scale-105' : ''}`}
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
                    ? 'border-amber-800 bg-gradient-to-br from-amber-50 to-white shadow-2xl'
                    : 'border-gray-200 bg-white hover:shadow-lg'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-black">{plan.price}</div>
                  <p className="text-gray-600 text-sm mt-2">Contact for quote</p>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all mb-8 ${
                    plan.highlight
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'border-2 border-black text-black hover:bg-black hover:text-white'
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

        <div className={`mt-16 bg-gray-900 rounded-xl p-8 text-center transition-all duration-700 ${
          isVisible ? 'animate-fadeInUp' : 'opacity-0'
        }`} style={{ animationDelay: '0.45s' }}>
          <h3 className="text-2xl font-bold text-white mb-3">Need Something Custom?</h3>
          <p className="text-gray-300 mb-6">Let's discuss your unique requirements and create a tailored solution.</p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3 bg-amber-800 text-white rounded-lg font-semibold hover:bg-amber-900 transition-all"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
