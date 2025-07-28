"use client";
import { HeroIllustration } from "./HeroIllustration";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-primary-light/20 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-20 right-10 w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            The Future of
            <span className="block text-white/90 animate-pulse-slow" style={{
              background: 'linear-gradient(135deg, #ffe6f7, #c4f0ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Productivity
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-100 font-medium">
            Meet Productivity—where AI meets intuition. Seamlessly blend task management, intelligent notes, smart scheduling, and personalized insights into one beautiful, unified workspace that adapts to your unique workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-200">
            <button className="bg-white text-primary-vibrant px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 shadow-2xl group">
              <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                Start Free Trial
              </span>
            </button>
            <button className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-vibrant hover:border-white transition-all duration-300 backdrop-blur-sm group">
              <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative animate-fade-in-up animate-delay-300">
          <HeroIllustration />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 