/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f96163", // Primary color
        // secondary: "#f96163", // Secondary color
      },
    },
  },
  plugins: [],
};
