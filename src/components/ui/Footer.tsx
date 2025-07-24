"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-6 sm:py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            className="flex items-center justify-center mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
            </motion.div>
            <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-semibold">
              Productivity
            </span>
          </motion.div>
          <motion.p
            className="text-gray-400 text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © 2025 Productivity. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};
