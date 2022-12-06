/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "nfsu-bg": "#105070",
        "nfsu-text": "#3c92b0",
      },
      backgroundImage: (theme) => ({
        "nfsu-dark": "url('/storage/images/map-dark.webp')",
        "nfsu-light": "url('/storage/images/map-light.jpg')",
      }),
    },
  },
  plugins: [],
};
