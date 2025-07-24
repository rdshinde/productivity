"use client";

import React from "react";
import { motion, easeInOut } from "framer-motion";

export const AuthIllustration: React.FC = () => {
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: easeInOut,
    },
  };

  const floatDelayedAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: easeInOut,
      delay: 3,
    },
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easeInOut,
    },
  };

  const floatingElementAnimation = {
    y: [0, -15, -30, -15, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: easeInOut,
    },
  };

  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.div animate={floatAnimation}>
        <svg
          viewBox="0 0 500 400"
          className="w-full h-auto drop-shadow-2xl"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0, 128, 157, 0.2))" }}
        >
          {/* Background Circle */}
          <motion.circle
            cx="250"
            cy="200"
            r="180"
            fill="rgba(255, 255, 255, 0.1)"
            animate={pulseAnimation}
          />

          {/* Main Device/Phone */}
          <motion.g animate={floatDelayedAnimation}>
            <rect
              x="180"
              y="120"
              width="140"
              height="160"
              rx="20"
              fill="#ffffff"
              opacity="0.95"
            />
            <rect
              x="190"
              y="135"
              width="120"
              height="130"
              rx="8"
              fill="#00809D"
            />

            {/* Phone Content - Login Screen */}
            <circle cx="250" cy="160" r="20" fill="#00B4D8" />
            <rect x="210" y="185" width="80" height="8" rx="4" fill="#00B4D8" />
            <rect x="220" y="200" width="60" height="6" rx="3" fill="#0099CC" />

            {/* Google Button Representation */}
            <rect
              x="200"
              y="220"
              width="100"
              height="20"
              rx="10"
              fill="#ffffff"
            />
            <circle cx="215" cy="230" r="6" fill="#4285F4" />
            <rect x="225" y="227" width="65" height="6" rx="3" fill="#34A853" />
          </motion.g>

          {/* Security Shield */}
          <motion.g
            animate={{
              ...floatingElementAnimation,
              transition: { ...floatingElementAnimation.transition, delay: 0 },
            }}
          >
            <path
              d="M 80 180 L 80 220 Q 80 240 100 250 L 120 240 Q 140 240 140 220 L 140 180 Q 140 160 120 160 L 100 160 Q 80 160 80 180 Z"
              fill="#ffffff"
              opacity="0.9"
            />
            <path
              d="M 90 190 L 90 210 Q 90 220 100 225 L 110 220 Q 130 220 130 210 L 130 190 Q 130 180 120 180 L 100 180 Q 90 180 90 190 Z"
              fill="#00809D"
            />
            {/* Checkmark in shield */}
            <path
              d="M 100 200 L 107 207 L 120 190"
              stroke="#ffffff"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>

          {/* Floating Key */}
          <motion.g
            animate={{
              ...floatingElementAnimation,
              transition: { ...floatingElementAnimation.transition, delay: 2 },
            }}
          >
            <ellipse
              cx="380"
              cy="150"
              rx="15"
              ry="25"
              fill="#ffffff"
              opacity="0.9"
            />
            <rect x="395" y="147" width="30" height="6" rx="3" fill="#00809D" />
            <rect x="420" y="144" width="8" height="4" rx="2" fill="#00809D" />
            <rect x="420" y="152" width="12" height="4" rx="2" fill="#00809D" />
            <circle cx="380" cy="150" r="8" fill="#00B4D8" />
          </motion.g>

          {/* Floating Profile Icons */}
          <motion.g
            animate={{
              ...floatingElementAnimation,
              transition: { ...floatingElementAnimation.transition, delay: 4 },
            }}
          >
            <circle cx="120" cy="100" r="20" fill="#ffffff" opacity="0.9" />
            <circle cx="120" cy="95" r="8" fill="#00809D" />
            <path
              d="M 105 115 Q 120 105 135 115"
              stroke="#00809D"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          <motion.g
            animate={{
              ...floatingElementAnimation,
              transition: { ...floatingElementAnimation.transition, delay: 6 },
            }}
          >
            <circle cx="380" cy="250" r="18" fill="#ffffff" opacity="0.9" />
            <circle cx="380" cy="246" r="6" fill="#FF6B35" />
            <path
              d="M 368 262 Q 380 254 392 262"
              stroke="#FF6B35"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </motion.g>

          {/* Connection Lines */}
          <motion.g animate={pulseAnimation}>
            <line
              x1="140"
              y1="200"
              x2="180"
              y2="200"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="320"
              y1="200"
              x2="360"
              y2="200"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.6"
            />
            <line
              x1="250"
              y1="120"
              x2="250"
              y2="160"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.5"
            />
          </motion.g>

          {/* Security Locks */}
          <motion.g animate={pulseAnimation}>
            <rect
              x="70"
              y="320"
              width="16"
              height="20"
              rx="3"
              fill="#ffffff"
              opacity="0.8"
            />
            <rect
              x="72"
              y="322"
              width="12"
              height="8"
              rx="6"
              fill="none"
              stroke="#00809D"
              strokeWidth="2"
            />
            <circle cx="78" cy="332" r="2" fill="#00809D" />

            <rect
              x="400"
              y="320"
              width="16"
              height="20"
              rx="3"
              fill="#ffffff"
              opacity="0.8"
            />
            <rect
              x="402"
              y="322"
              width="12"
              height="8"
              rx="6"
              fill="none"
              stroke="#FF6B35"
              strokeWidth="2"
            />
            <circle cx="408" cy="332" r="2" fill="#FF6B35" />
          </motion.g>

          {/* Sparkles/Security Elements */}
          <motion.g animate={pulseAnimation}>
            <polygon
              points="150,60 153,70 163,70 155,78 158,88 150,82 142,88 145,78 137,70 147,70"
              fill="#ffffff"
              opacity="0.7"
            />
            <polygon
              points="350,80 352,87 359,87 354,92 356,99 350,95 344,99 346,92 341,87 348,87"
              fill="#ffffff"
              opacity="0.6"
            />
            <polygon
              points="100,300 102,307 109,307 104,312 106,319 100,315 94,319 96,312 91,307 98,307"
              fill="#ffffff"
              opacity="0.5"
            />
            <polygon
              points="380,320 382,327 389,327 384,332 386,339 380,335 374,339 376,332 371,327 378,327"
              fill="#ffffff"
              opacity="0.6"
            />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
};
