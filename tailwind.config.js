/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00809D",
        "primary-light": "#00B4D8",
        "primary-dark": "#005577",
        "primary-vibrant": "#0099CC",
        accent: "#FF6B35",
        "accent-light": "#FF8C69",
        "gray-50": "#FAFAFA",
        "gray-900": "#0A0A0A",
      },
      fontFamily: {
        apple: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
