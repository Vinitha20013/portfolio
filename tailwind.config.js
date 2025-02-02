/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your component files
    "./public/index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
