"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";

interface FloatingElementProps {
  className: string;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  className,
  delay = 0,
}) => {
  const floatingAnimation = {
    y: [0, -15, -30, -15, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: easeInOut,
      delay,
    },
  };

  return <motion.div className={className} animate={floatingAnimation} />;
};

const FloatingElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement
        className="absolute top-16 sm:top-20 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-sm"
        delay={0}
      />
      <FloatingElement
        className="absolute top-32 sm:top-40 right-12 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-primary-light/20 rounded-full blur-sm"
        delay={2}
      />
      <FloatingElement
        className="absolute bottom-32 sm:bottom-40 left-12 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-sm"
        delay={4}
      />
      <FloatingElement
        className="absolute bottom-16 sm:bottom-20 right-6 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 bg-white/15 rounded-full blur-sm"
        delay={6}
      />

      {/* Additional floating elements for larger screens */}
      <FloatingElement
        className="hidden md:block absolute top-1/4 left-1/4 w-6 h-6 bg-primary-vibrant/30 rounded-full blur-sm"
        delay={1}
      />
      <FloatingElement
        className="hidden md:block absolute top-3/4 right-1/4 w-10 h-10 bg-white/20 rounded-full blur-sm"
        delay={3}
      />
      <FloatingElement
        className="hidden lg:block absolute top-1/2 left-12 w-8 h-8 bg-accent-light/25 rounded-full blur-sm"
        delay={5}
      />
      <FloatingElement
        className="hidden lg:block absolute top-2/3 right-12 w-14 h-14 bg-primary/15 rounded-full blur-sm"
        delay={7}
      />
    </div>
  );
};
