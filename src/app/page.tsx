import React from "react";
import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-gray-200/20 shadow-sm transition-all duration-300" style={{ background: "rgba(255, 255, 255, 0.85)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-vibrant rounded-xl flex items-center justify-center shadow-lg" style={{ background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)" }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <span className="ml-4 text-2xl font-bold text-gray-900 tracking-tight">Productivity</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a href="#features" className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] relative group">
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#how-it-works" className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] relative group">
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] relative group">
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
              <div className="flex items-center space-x-3">
                <a href="auth" className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] px-4 py-2">
                  Sign In
                </a>
                <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-[1.02] font-medium text-[15px] shadow-md gradient-bg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
          <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-primary-light/20 rounded-full blur-sm"></div>
          <div className="floating-element absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-full blur-sm"></div>
          <div className="floating-element absolute bottom-20 right-10 w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
              The Future of <span className="block text-white/90 animate-pulse-slow" style={{ background: "linear-gradient(135deg, #ffe6f7, #c4f0ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Productivity</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/95 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up animate-delay-100 font-medium">
              Meet Productivity—where AI meets intuition. Seamlessly blend task management, intelligent notes, smart scheduling, and personalized insights into one beautiful, unified workspace that adapts to your unique workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-200">
              <button className="bg-white text-primary-vibrant px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 shadow-2xl group">
                <span className="group-hover:scale-110 transition-transform duration-200 inline-block">Start Free Trial</span>
              </button>
              <button className="border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-vibrant hover:border-white transition-all duration-300 backdrop-blur-sm group">
                <span className="group-hover:scale-110 transition-transform duration-200 inline-block">Watch Demo</span>
              </button>
            </div>
          </div>
          <div className="relative animate-fade-in-up animate-delay-300">
            <div className="hero-illustration animate-float">
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HomePage;
