"use client";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  popular?: boolean;
  buttonStyle?: string;
}

export function PricingSection() {
  const plans: PricingPlan[] = [
    {
      name: "Free Plan",
      price: "$0",
      description: "Perfect for getting started with basic productivity features",
      features: [
        { text: "Basic task management", included: true },
        { text: "Simple note-taking", included: true },
        { text: "Calendar integration", included: true },
        { text: "Basic dashboard widgets", included: true },
        { text: "Up to 3 projects", included: true },
        { text: "AI-powered features", included: false },
        { text: "Universal AI Search", included: false }
      ],
      buttonText: "Get Started Free",
      buttonStyle: "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
    },
    {
      name: "Pro Plan",
      price: "$12",
      description: "Full access to all productivity features and AI capabilities",
      popular: true,
      features: [
        { text: "Everything in Free", included: true },
        { text: "AI-powered task prioritization", included: true },
        { text: "Universal AI Search", included: true },
        { text: "Intelligent scheduling & optimization", included: true },
        { text: "AI content suggestions & summaries", included: true },
        { text: "Wellness integration & analytics", included: true },
        { text: "Advanced dashboard & widgets", included: true },
        { text: "Unlimited projects & collaboration", included: true },
        { text: "Priority support", included: true }
      ],
      buttonText: "Start Pro Trial",
      buttonStyle: "bg-primary text-white"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Start free and upgrade when you're ready to unlock the full power of AI-driven productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 relative ${
                plan.popular ? 'border-2 border-primary' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-primary-vibrant text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2 text-lg">/month</span>
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {feature.included ? (
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                    <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md ${plan.buttonStyle}`}
                style={plan.buttonStyle?.includes('bg-primary') ? {
                  background: 'linear-gradient(135deg, #00809d 0%, #0099cc 100%)',
                  color: 'white'
                } : {}}
              >
                {plan.buttonText}
              </button>
              
              {plan.popular && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  14-day free trial, then $12/month
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your team?
          </p>
          <button className="text-primary hover:text-primary-dark font-semibold transition-colors">
            Contact us for Enterprise pricing →
          </button>
        </div>
      </div>
    </section>
  );
} 