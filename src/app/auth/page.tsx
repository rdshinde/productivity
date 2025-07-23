"use client";
import React, { useState } from "react";

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-24 md:pt-0">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-primary-light/20 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-20 right-10 w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="auth-card p-8 sm:p-12 rounded-3xl shadow-2xl max-w-md mx-auto lg:mx-0 animate-fade-in-up">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-vibrant rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg" style={{ background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)" }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                Welcome to <span className="text-primary">Productivity</span>
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Sign in to unlock your productivity potential
              </p>
            </div>
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-8 animate-fade-in-up animate-delay-100">
              <button onClick={() => setIsSignIn(true)} className={`flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${isSignIn ? "text-white" : "text-gray-600 hover:text-primary"}`} style={{ background: isSignIn ? "linear-gradient(135deg, #00809d 0%, #0099cc 100%)" : "transparent" }}>
                Sign In
              </button>
              <button onClick={() => setIsSignIn(false)} className={`flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 ${!isSignIn ? "text-white" : "text-gray-600 hover:text-primary"}`} style={{ background: !isSignIn ? "linear-gradient(135deg, #00809d 0%, #0099cc 100%)" : "transparent" }}>
                Sign Up
              </button>
            </div>
            {isSignIn ? (
              <div id="signin-form" className="animate-fade-in-up animate-delay-200">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back!</h2>
                  <p className="text-gray-600">Continue your productivity journey</p>
                </div>
                <Link href="/preferences" className="google-btn w-full py-4 px-6 rounded-2xl font-semibold text-gray-700 flex items-center justify-center space-x-3 mb-6 shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                  </svg>
                  <span>Continue with Google</span>
                </Link>
              </div>
            ) : (
              <div id="signup-form" className="animate-fade-in-up animate-delay-200">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today!</h2>
                  <p className="text-gray-600">Create your account and boost your productivity</p>
                </div>
                <Link href="/preferences" className="google-btn w-full py-4 px-6 rounded-2xl font-semibold text-gray-700 flex items-center justify-center space-x-3 mb-6 shadow-md">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path>
                  </svg>
                  <span>Sign up with Google</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
