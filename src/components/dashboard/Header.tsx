import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { WeatherComponent } from "./WeatherComponent";

export const Header = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })
      );
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 mb-6 shadow-lg bg-white/98 backdrop-blur-[20px] border border-[rgba(0,128,157,0.1)]"
    >
      <div className="header-content flex flex-col md:flex-row items-center justify-between gap-4">
        {/* AI Search Bar */}
        <div className="search-container flex-1 max-w-2xl w-full md:mr-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Ask AI anything about your tasks, notes, events..."
              className="block w-full pl-10 pr-12 py-3 border border-[rgba(0,128,157,0.2)] rounded-2xl transition-all duration-200 text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:shadow-lg bg-white/80 backdrop-blur-[10px] focus:border-[#00809d] focus:bg-white/95"
              id="ai-search"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <kbd className="hidden sm:inline-block px-2 py-1 text-xs font-bold text-gray-500 rounded bg-[rgba(0,128,157,0.1)] border border-[rgba(0,128,157,0.2)]">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
        {/* Date, Time, Weather */}
        <div className="flex items-center space-x-6">
          <div className="text-right">
            <div className="text-lg font-black text-gray-900" id="current-time">
              {time}
            </div>
            <div
              className="text-sm text-gray-500 font-medium"
              id="current-date"
            >
              {date}
            </div>
          </div>

          {/* Weather Component */}
          <WeatherComponent />
        </div>
      </div>
    </motion.header>
  );
};
