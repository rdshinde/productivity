"use client";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
      };

      setTime(now.toLocaleTimeString("en-US", timeOptions));
      setDate(now.toLocaleDateString("en-US", dateOptions));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="relative flex-1 max-w-lg">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              id="smart-search"
              type="text"
              placeholder="Search tasks or type to add..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-900" id="current-time">
                {time}
              </div>
              <div className="text-sm text-gray-500" id="current-date">
                {date}
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-3 rounded-xl shadow-sm">
              <div className="weather-icon text-2xl">☀️</div>
              <div>
                <div className="text-sm font-medium text-gray-900">72°F</div>
                <div className="text-xs text-gray-500">Sunny</div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full border-2 border-gray-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
