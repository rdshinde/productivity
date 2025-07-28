"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-gray-200/20 shadow-sm transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.85)",
        borderBottom: scrolled ? "1px solid rgba(0, 128, 157, 0.15)" : "1px solid rgba(200, 200, 200, 0.2)",
        boxShadow: scrolled ? "0 4px 24px rgba(0, 128, 157, 0.1)" : "0 2px 12px rgba(0, 0, 0, 0.05)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div
              className="w-10 h-10 bg-gradient-to-br from-primary to-primary-vibrant rounded-xl flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)"
              }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="ml-4 text-2xl font-bold text-gray-900 tracking-tight">Productivity</span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a
              href="/#features"
              className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/#how-it-works"
              className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a
              href="/#pricing"
              className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </a>
            <div className="flex items-center space-x-3">
              <a
                href="/auth"
                className="text-gray-800 hover:text-primary transition-all duration-200 font-medium text-[15px] px-4 py-2"
              >
                Sign In
              </a>
              <button
                className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-[1.02] font-medium text-[15px] shadow-md gradient-bg"
              >
                Get Started
              </button>
            </div>
          </div>

          <button
            id="mobile-menu-button"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            <svg
              id="hamburger-icon"
              className={`w-6 h-6 text-primary transition-transform duration-300 ${isMenuOpen ? 'hidden' : ''}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#00809d" }}
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              id="close-icon"
              className={`w-6 h-6 text-primary transition-transform duration-300 ${isMenuOpen ? '' : 'hidden'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: "#00809d" }}
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-t border-gray-200/30 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'transform translate-y-0 opacity-100 pointer-events-auto' : 'transform -translate-y-full opacity-0 pointer-events-none'
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(0, 128, 157, 0.05) 50%, rgba(255, 255, 255, 0.95) 100%)",
            borderTop: "1px solid rgba(0, 128, 157, 0.2)"
          }}
        >
          <div className="px-6 py-4 space-y-4">
            <a
              href="/#features"
              className="block text-gray-800 hover:text-primary transition-all duration-200 font-medium text-lg py-2 border-b border-gray-100"
              onClick={closeMenu}
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="block text-gray-800 hover:text-primary transition-all duration-200 font-medium text-lg py-2 border-b border-gray-100"
              onClick={closeMenu}
            >
              How It Works
            </a>
            <a
              href="/#pricing"
              className="block text-gray-800 hover:text-primary transition-all duration-200 font-medium text-lg py-2 border-b border-gray-100"
              onClick={closeMenu}
            >
              Pricing
            </a>
            <div className="pt-4 space-y-3">
              <a
                href="/auth"
                className="block w-full text-center text-gray-800 hover:text-primary transition-all duration-200 font-medium text-lg py-3"
                onClick={closeMenu}
              >
                Sign In
              </a>
              <button
                className="block w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 font-medium text-lg shadow-md gradient-bg"
                onClick={closeMenu}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
