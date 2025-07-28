"use client";

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Connect & Authenticate",
      description: "Seamless Google OAuth integration automatically syncs your calendar, drive, and existing productivity tools. One click, infinite possibilities."
    },
    {
      number: "2",
      title: "AI Learns Your Style",
      description: "Our intelligent system analyzes your work patterns, communication style, and preferences to create a truly personalized productivity environment."
    },
    {
      number: "3",
      title: "Experience the Magic",
      description: "Watch as Productivity transforms into your perfect workspace—organized, intelligent, and uniquely yours. Productivity has never felt this natural."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Three Steps to Transformation
          </h2>
          <p className="text-xl text-gray-600">
            From chaos to clarity in under 5 minutes—our AI handles the heavy lifting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-vibrant rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg gradient-bg">
                <span className="text-2xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 