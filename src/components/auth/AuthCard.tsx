"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Loader2 } from "lucide-react";
import Link from "next/link";

type AuthMode = "signin" | "signup";

interface GoogleButtonProps {
  mode: AuthMode;
  isLoading: boolean;
  onClick: () => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({
  mode,
  isLoading,
  onClick,
}) => (
  <motion.button
    onClick={onClick}
    disabled={isLoading}
    className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-2xl font-bold text-gray-700 flex items-center justify-center space-x-3 mb-6 shadow-md bg-white border-2 border-gray-200 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
    whileHover={!isLoading ? { y: -2, scale: 1.02 } : {}}
    whileTap={!isLoading ? { scale: 0.98 } : {}}
  >
    {isLoading ? (
      <>
        <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" />
        <span className="text-sm sm:text-base font-bold">
          {mode === "signin" ? "Signing in..." : "Creating account..."}
        </span>
      </>
    ) : (
      <>
        <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="text-sm sm:text-base font-bold">
          {mode === "signin" ? "Continue with Google" : "Sign up with Google"}
        </span>
      </>
    )}
  </motion.button>
);

export const AuthCard: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>("signin");
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    // Simulate authentication process
    setTimeout(() => {
      // In real implementation, redirect to preferences or dashboard
      console.log(`${authMode} with Google`);
      setIsLoading(false);
      // window.location.href = '/preferences';
    }, 1500);
  };

  const switchMode = (mode: AuthMode) => {
    if (isLoading) return;
    setAuthMode(mode);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl"
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 128, 157, 0.1)",
        }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
            }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 sm:mb-3"
            style={{ fontWeight: 900, letterSpacing: "-0.02em" }}
          >
            Welcome to <span style={{ color: "#00809d" }}>Productivity</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-bold">
            Sign in to unlock your productivity potential
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div
          className="flex bg-gray-100 rounded-2xl p-1 mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => switchMode("signin")}
            className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 text-sm font-bold rounded-xl transition-all duration-300 ${
              authMode === "signin"
                ? "text-white shadow-md"
                : "text-gray-600 hover:text-primary"
            }`}
            style={
              authMode === "signin"
                ? {
                    background:
                      "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
                  }
                : {}
            }
          >
            Sign In
          </button>
          <button
            onClick={() => switchMode("signup")}
            className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 text-sm font-bold rounded-xl transition-all duration-300 ${
              authMode === "signup"
                ? "text-white shadow-md"
                : "text-gray-600 hover:text-primary"
            }`}
            style={
              authMode === "signup"
                ? {
                    background:
                      "linear-gradient(135deg, #00809d 0%, #0099cc 100%)",
                  }
                : {}
            }
          >
            Sign Up
          </button>
        </motion.div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={authMode}
            initial={{ opacity: 0, x: authMode === "signin" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: authMode === "signin" ? 20 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                {authMode === "signin" ? "Welcome Back!" : "Get Started Today!"}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-semibold">
                {authMode === "signin"
                  ? "Continue your productivity journey"
                  : "Create your account and boost your productivity"}
              </p>
            </div>

            <GoogleButton
              mode={authMode}
              isLoading={isLoading}
              onClick={handleGoogleAuth}
            />

            <div className="text-center">
              <p className="text-xs sm:text-sm text-gray-500">
                By {authMode === "signin" ? "signing in" : "signing up"}, you
                agree to our{" "}
                <Link
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors underline underline-offset-2"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
