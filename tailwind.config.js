/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "burnt-orange": "#f3613c",
        "burnt-orange-active": "#f98f75",
        secondary: "#b7b8bd",
        primary: "#262f54",
        testimonial: "#fafafa",
      },
      backgroundImage: {
        "pre-footer": "/bg-simplify-section.svg",
      },
    },
  },
  plugins: [],
};
