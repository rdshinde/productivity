"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Star } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  isExternal?: boolean;
}

interface ActionButton {
  href: string;
  label: string;
  variant: "primary" | "secondary" | "link";
  className?: string;
  style?: React.CSSProperties;
}

interface NavConfig {
  mainItems: NavItem[];
  footerLinks: NavItem[];
}

// Dynamic function to get button text and href based on current path
const getButtonConfig = (pathname: string) => {
  const isAuthPage = pathname === "/auth";
  const isHomePage = pathname === "/" || pathname === "";

  if (isAuthPage) {
    return { href: "/", label: "Back to Home" };
  } else if (isHomePage) {
    return { href: "/auth", label: "Get Started" };
  } else {
    // Default for other pages
    return { href: "/", label: "Back to Home" };
  }
};

const navConfig: NavConfig = {
  mainItems: [
    { href: "/#features", label: "Features" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
  ],
  footerLinks: [{ href: "/terms", label: "Terms & Conditions" }],
};

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Get dynamic button text and href based on current path
  const buttonConfig = getButtonConfig(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-gray-200/20 shadow-sm transition-all duration-300 ${
        scrolled ? "bg-white/90" : "bg-white/85"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#00809d] to-[#0099cc]">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <Link
              href="/"
              className="ml-3 sm:ml-4 text-xl sm:text-2xl font-black text-gray-900 tracking-tight hover:text-[#00809d] transition-colors duration-200"
            >
              Productivity
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navConfig.mainItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-800 hover:text-[#00809d] transition-all duration-200 font-semibold text-sm lg:text-[15px] relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00809d] transition-all duration-200 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href={buttonConfig.href}
                className="bg-gradient-to-r from-[#00809d] via-[#00b4d8] to-[#0099cc] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full hover:shadow-lg hover:shadow-[#00809d]/25 transition-all duration-300 transform hover:scale-[1.02] font-bold text-sm lg:text-[15px] shadow-md"
              >
                {buttonConfig.label}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-[#00809d]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-[#00809d]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-t border-[rgba(0,128,157,0.2)] shadow-lg bg-gradient-to-br from-white/98 via-[rgba(0,128,157,0.05)] to-white/95"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 sm:px-6 py-4 space-y-4">
                {navConfig.mainItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block text-gray-800 hover:text-[#00809d] transition-all duration-200 font-semibold text-lg py-2 border-b border-gray-100"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                {navConfig.footerLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: navConfig.mainItems.length * 0.1 + index * 0.1,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="block text-gray-600 hover:text-[#00809d] transition-all duration-200 font-medium text-lg py-2 border-b border-gray-100 underline underline-offset-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href={buttonConfig.href}
                    onClick={closeMenu}
                    className="block w-full bg-gradient-to-r from-[#00809d] via-[#00b4d8] to-[#0099cc] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-[#00809d]/25 transition-all duration-300 font-bold text-lg shadow-md text-center"
                  >
                    {buttonConfig.label}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
