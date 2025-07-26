import axios from "axios";

// OpenWeatherMap API configuration
const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY || "";
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/3.0";

export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  location: string;
  country: string;
  uvIndex: number;
  visibility: number;
  pressure: number;
}

export interface LocationCoords {
  latitude: number;
  longitude: number;
}

// Get user's current location using browser geolocation
export const getCurrentLocation = (): Promise<LocationCoords> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        let errorMessage = "Unknown location error";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied by user.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
        }
        reject(new Error(errorMessage));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // Cache for 5 minutes
      }
    );
  });
};

// Fetch weather data using OpenWeatherMap API
export const getWeatherByCoordinates = async (
  coords: LocationCoords
): Promise<WeatherData> => {
  try {
    if (!WEATHER_API_KEY) {
      return getFallbackWeatherData();
    }

    // Try One Call API 3.0 first, then fallback to current weather API
    let weatherData;

    try {
      // Try One Call API 3.0 (requires subscription)
      const oneCallUrl = `${WEATHER_API_BASE_URL}/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely,hourly,daily,alerts&appid=${WEATHER_API_KEY}&units=metric`;

      const response = await axios.get(oneCallUrl);

      const current = response.data.current;
      weatherData = {
        temperature: Math.round(current.temp),
        condition: current.weather[0].description,
        icon: getOpenWeatherIcon(
          current.weather[0].icon,
          current.weather[0].id
        ),
        humidity: current.humidity,
        windSpeed: Math.round(current.wind_speed),
        feelsLike: Math.round(current.feels_like),
        uvIndex: Math.round(current.uvi || 0),
        visibility: Math.round((current.visibility || 0) / 1000), // Convert meters to kilometers
        pressure: Math.round(current.pressure || 0),
      };
    } catch (oneCallError) {
      // Fallback to current weather API (free)
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${WEATHER_API_KEY}&units=metric`;

      const response = await axios.get(currentWeatherUrl);

      const data = response.data;
      weatherData = {
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].description,
        icon: getOpenWeatherIcon(data.weather[0].icon, data.weather[0].id),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind?.speed || 0),
        feelsLike: Math.round(data.main.feels_like),
        uvIndex: 0, // Not available in current weather API
        visibility: Math.round((data.visibility || 0) / 1000), // Convert meters to kilometers
        pressure: Math.round(data.main.pressure || 0),
      };
    }

    // Get location name using reverse geocoding
    let location = "Unknown Location";
    let country = "Unknown Country";

    try {
      const geocodeUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=1&appid=${WEATHER_API_KEY}`;

      const geocodeResponse = await axios.get(geocodeUrl);

      if (geocodeResponse.data && geocodeResponse.data.length > 0) {
        const locationData = geocodeResponse.data[0];
        location =
          locationData.name ||
          locationData.local_names?.en ||
          "Unknown Location";
        country = locationData.country || "Unknown Country";
      }
    } catch (geocodeError) {
      // Silent geocoding failure
    }

    const finalWeatherData = {
      ...weatherData,
      location,
      country,
    };

    return finalWeatherData;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Silent API error handling
    }
    return getFallbackWeatherData();
  }
};

// Fallback weather data for development/demo purposes
const getFallbackWeatherData = (): WeatherData => {
  const conditions = [
    { condition: "clear sky", icon: "☀️", temp: 22 }, // ~72°F in Celsius
    { condition: "few clouds", icon: "⛅", temp: 20 }, // ~68°F in Celsius
    { condition: "scattered clouds", icon: "☁️", temp: 18 }, // ~65°F in Celsius
    { condition: "light rain", icon: "🌦️", temp: 16 }, // ~62°F in Celsius
  ];

  const randomCondition =
    conditions[Math.floor(Math.random() * conditions.length)];

  return {
    temperature: randomCondition.temp + Math.floor(Math.random() * 10) - 5,
    condition: randomCondition.condition,
    icon: randomCondition.icon,
    humidity: Math.floor(Math.random() * 40) + 40,
    windSpeed: Math.floor(Math.random() * 15) + 5, // m/s
    feelsLike: randomCondition.temp + Math.floor(Math.random() * 6) - 3,
    location: "San Francisco",
    country: "United States",
    uvIndex: Math.floor(Math.random() * 11),
    visibility: Math.floor(Math.random() * 10) + 5, // km
    pressure: Math.floor(Math.random() * 50) + 1000, // hPa
  };
};

// Map OpenWeatherMap icons and condition codes to emoji icons
const getOpenWeatherIcon = (iconCode: string, conditionId: number): string => {
  // OpenWeatherMap icon codes mapping
  const iconMap: { [key: string]: string } = {
    "01d": "☀️", // clear sky day
    "01n": "🌙", // clear sky night
    "02d": "🌤️", // few clouds day
    "02n": "�", // few clouds night
    "03d": "☁️", // scattered clouds day
    "03n": "☁️", // scattered clouds night
    "04d": "☁️", // broken clouds day
    "04n": "☁️", // broken clouds night
    "09d": "🌧️", // shower rain day
    "09n": "🌧️", // shower rain night
    "10d": "🌦️", // rain day
    "10n": "🌧️", // rain night
    "11d": "⛈️", // thunderstorm day
    "11n": "⛈️", // thunderstorm night
    "13d": "�️", // snow day
    "13n": "�️", // snow night
    "50d": "�️", // mist day
    "50n": "�️", // mist night
  };

  // Check if we have a direct icon mapping
  if (iconMap[iconCode]) {
    return iconMap[iconCode];
  }

  // Fallback to condition ID mapping
  if (conditionId >= 200 && conditionId < 300) return "⛈️"; // Thunderstorm
  if (conditionId >= 300 && conditionId < 400) return "�️"; // Drizzle
  if (conditionId >= 500 && conditionId < 600) return "�️"; // Rain
  if (conditionId >= 600 && conditionId < 700) return "🌨️"; // Snow
  if (conditionId >= 700 && conditionId < 800) return "🌫️"; // Atmosphere
  if (conditionId === 800) return iconCode.includes("d") ? "☀️" : "🌙"; // Clear
  if (conditionId > 800) return "☁️"; // Clouds

  // Default fallback
  return iconCode.includes("d") ? "☀️" : "🌙";
};

// Get weather data by city name (alternative method)
export const getWeatherByCity = async (
  cityName: string
): Promise<WeatherData> => {
  try {
    if (!WEATHER_API_KEY) {
      return getFallbackWeatherData();
    }

    // First, get coordinates for the city using geocoding
    const geocodeResponse = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${WEATHER_API_KEY}`
    );

    if (!geocodeResponse.data || geocodeResponse.data.length === 0) {
      throw new Error(`City "${cityName}" not found`);
    }

    const locationData = geocodeResponse.data[0];
    const coords: LocationCoords = {
      latitude: locationData.lat,
      longitude: locationData.lon,
    };

    // Now get weather data using coordinates
    return await getWeatherByCoordinates(coords);
  } catch (error) {
    console.error("Error fetching weather data by city:", error);
    return getFallbackWeatherData();
  }
};
