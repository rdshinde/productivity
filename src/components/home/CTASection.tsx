"use client";

export function CTASection() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Productivity?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of users who've revolutionized their workflow with Productivity
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get Started Free
          </button>
          <button className="border-2 border-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
} 