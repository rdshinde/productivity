"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const preferences = [
  { name: "Software Engineering", icon: "💻", key: "software-engineering" },
  { name: "Cooking", icon: "🍳", key: "cooking" },
  { name: "Music", icon: "🎵", key: "music" },
  { name: "Drama & Theater", icon: "🎭", key: "drama" },
  { name: "Travel", icon: "✈️", key: "travel" },
  { name: "Fitness", icon: "💪", key: "fitness" },
  { name: "Photography", icon: "📸", key: "photography" },
  { name: "Reading", icon: "📚", key: "reading" },
  { name: "Art & Design", icon: "🎨", key: "art" },
  { name: "Business", icon: "💼", key: "business" },
  { name: "Gaming", icon: "🎮", key: "gaming" },
  { name: "Science", icon: "🔬", key: "science" },
  { name: "Writing", icon: "✍️", key: "writing" },
  { name: "Education", icon: "🎓", key: "education" },
  { name: "Sports", icon: "⚽", key: "sports" },
];

const PreferencesPage = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<Set<string>>(new Set());
  const router = useRouter();

  const togglePreference = (preference: string) => {
    const newPreferences = new Set(selectedPreferences);
    if (newPreferences.has(preference)) {
      newPreferences.delete(preference);
    } else {
      newPreferences.add(preference);
    }
    setSelectedPreferences(newPreferences);
  };

  const submitPreferences = () => {
    localStorage.setItem("userPreferences", JSON.stringify(Array.from(selectedPreferences)));
    router.push("/dashboard");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden pt-20 sm:pt-24 md:pt-0">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-primary-light/20 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-full blur-sm"></div>
        <div className="floating-element absolute bottom-20 right-10 w-12 h-12 bg-white/15 rounded-full blur-sm"></div>
      </div>
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 my-32">
        <div className="flex items-center justify-center min-h-screen md:min-h-0">
          <div className="w-full flex justify-center">
            <div className="preference-card mx-8 p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl animate-fade-in-up max-w-5xl">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary-vibrant rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg relative" style={{ background: "linear-gradient(135deg, #00809d 0%, #0099cc 100%)" }}>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                  <div className="absolute inset-0 rounded-2xl bg-primary opacity-25 pulse-ring"></div>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3" style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                  Personalize Your <span className="text-primary">Experience</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600 font-medium px-2">
                  Select your interests to help us tailor your productivity workspace
                </p>
              </div>
              <div className="mb-6 sm:mb-8 animate-fade-in-up animate-delay-100">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Choose your interests</span>
                  <span id="selection-count">{selectedPreferences.size} selected</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div id="progress-bar" className="bg-gradient-to-r from-primary to-primary-vibrant h-2 rounded-full transition-all duration-300" style={{ width: `${Math.min((selectedPreferences.size / 3) * 100, 100)}%` }}></div>
                </div>
              </div>
              <div className="mb-6 sm:mb-8 animate-fade-in-up animate-delay-200">
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 lg:gap-4">
                  {preferences.map((pref) => (
                    <div key={pref.key} onClick={() => togglePreference(pref.key)} className={`preference-chip bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl px-2 sm:px-4 py-3 sm:py-4 text-center ${selectedPreferences.has(pref.key) ? "selected" : ""}`}>
                      <div className="text-2xl sm:text-3xl mb-2">{pref.icon}</div>
                      <div className="text-xs sm:text-sm font-semibold leading-tight">{pref.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-fade-in-up animate-delay-300">
                <button onClick={submitPreferences} disabled={selectedPreferences.size === 0} className="submit-btn w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base">
                  <span>Continue to Dashboard</span>
                </button>
                <p className="text-xs sm:text-sm text-gray-500 text-center mt-2 sm:mt-3 px-2">
                  You can always change these preferences later in settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreferencesPage;
