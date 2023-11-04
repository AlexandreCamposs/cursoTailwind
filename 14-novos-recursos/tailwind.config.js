/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'media',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose,
      },
    },
  },
  plugins: [],
};
