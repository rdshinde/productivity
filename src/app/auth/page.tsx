"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  AuthCard,
  AuthIllustration,
  Footer,
  FloatingElement,
} from "@/components";
const AuthPage: React.FC = () => {
  return (
    <div className="font-inter bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Auth Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0"
        style={{
          background:
            "linear-gradient(135deg, #00809d 0%, #00b4d8 50%, #0099cc 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Floating Background Elements */}
        <FloatingElement
          className="absolute top-16 sm:top-20 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-sm"
          delay={0}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content - Auth Form */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AuthCard />
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AuthIllustration />
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AuthPage;
