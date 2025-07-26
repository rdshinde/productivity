"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Thermometer,
  Droplets,
  Wind,
  RefreshCw,
  Eye,
  Gauge,
  Sun,
} from "lucide-react";
import {
  getCurrentLocation,
  getWeatherByCoordinates,
  WeatherData,
  LocationCoords,
} from "@/services/weatherService";

interface WeatherComponentProps {
  className?: string;
}

export const WeatherComponent: React.FC<WeatherComponentProps> = ({
  className = "",
}) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Fetch weather data
  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get user's current location
      const coords: LocationCoords = await getCurrentLocation();

      // Fetch weather data for the location
      const weatherData = await getWeatherByCoordinates(coords);

      setWeather(weatherData);
      setLastUpdated(new Date());
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch weather data"
      );

      // Fallback: try to get weather for a default location
      try {
        const { getWeatherByCity } = await import("@/services/weatherService");
        const fallbackWeather = await getWeatherByCity("San Francisco");
        setWeather(fallbackWeather);
        setLastUpdated(new Date());
      } catch (fallbackErr) {
        // Silent fallback failure
      }
    } finally {
      setLoading(false);
    }
  };

  // Initial weather fetch
  useEffect(() => {
    fetchWeatherData();
  }, []);

  // Auto-refresh weather data every 10 minutes
  useEffect(() => {
    const interval = setInterval(fetchWeatherData, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Manual refresh function
  const handleRefresh = () => {
    fetchWeatherData();
  };

  if (loading) {
    return (
      <div
        className={`flex items-center space-x-3 px-4 py-3 rounded-2xl shadow-md bg-gradient-to-br from-[rgba(0,128,157,0.1)] to-[rgba(0,180,216,0.1)] border border-[rgba(0,128,157,0.2)] ${className}`}
      >
        <div className="animate-spin">🌀</div>
        <div>
          <div className="text-sm font-bold text-gray-900">Loading...</div>
          <div className="text-xs text-gray-500 font-medium">
            Getting weather
          </div>
        </div>
      </div>
    );
  }

  if (error && !weather) {
    return (
      <div
        className={`flex items-center space-x-3 px-4 py-3 rounded-2xl shadow-md bg-gradient-to-br from-red-50 to-red-100 border border-red-200 ${className}`}
      >
        <div className="text-red-500">⚠️</div>
        <div>
          <div className="text-sm font-bold text-red-900">Weather Error</div>
          <button
            onClick={handleRefresh}
            className="text-xs text-red-600 font-medium hover:text-red-800 transition-colors duration-200"
          >
            Tap to retry
          </button>
        </div>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <motion.div
      className={`flex items-center space-x-3 px-4 py-3 rounded-2xl shadow-md bg-gradient-to-br from-[rgba(0,128,157,0.1)] to-[rgba(0,180,216,0.1)] border border-[rgba(0,128,157,0.2)] ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Weather Icon */}
      <div className="weather-icon text-2xl">{weather.icon}</div>

      {/* Weather Info */}
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <div className="text-sm font-bold text-gray-900">
            {weather.temperature}°C
          </div>
          <button
            onClick={handleRefresh}
            className="p-1 hover:bg-white/50 rounded-full transition-colors duration-200"
            title="Refresh weather"
          >
            <RefreshCw className="w-3 h-3 text-gray-500" />
          </button>
        </div>

        <div className="text-xs text-gray-500 font-medium">
          {weather.condition}
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1 mt-1">
          <MapPin className="w-3 h-3 text-[#00809d]" />
          <span className="text-xs font-medium text-[#00809d]">
            {weather.location}
          </span>
        </div>
      </div>

      {/* Additional Weather Details (shown on hover) */}
      <div className="hidden lg:block">
        <div className="text-right space-y-1">
          <div className="flex items-center justify-end space-x-1 text-xs text-gray-500">
            <Thermometer className="w-3 h-3" />
            <span>Feels {weather.feelsLike}°C</span>
          </div>
          <div className="flex items-center justify-end space-x-1 text-xs text-gray-500">
            <Droplets className="w-3 h-3" />
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center justify-end space-x-1 text-xs text-gray-500">
            <Wind className="w-3 h-3" />
            <span>{weather.windSpeed} m/s</span>
          </div>
          {weather.uvIndex !== undefined && (
            <div className="flex items-center justify-end space-x-1 text-xs text-gray-500">
              <Sun className="w-3 h-3" />
              <span>UV {weather.uvIndex}</span>
            </div>
          )}
          {/* {weather.visibility !== undefined && (
            <div className="flex items-center justify-end space-x-1 text-xs text-gray-500">
              <Eye className="w-3 h-3" />
              <span>{weather.visibility} km</span>
            </div>
          )}
          {weather.pressure !== undefined && (
            <div className="flex items-center justify-end space-x-1 text-xs text-gray-500">
              <Gauge className="w-3 h-3" />
              <span>{weather.pressure} hPa</span>
            </div>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};
