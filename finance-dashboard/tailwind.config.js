/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",   // 🔥 THIS IS THE MOST IMPORTANT LINE
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};