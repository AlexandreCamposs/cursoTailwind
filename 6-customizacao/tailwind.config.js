/** @type {import('tailwindcss').Config} */

const { colors } = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // colors: {
    //   red: '#A83246',
    //   blue: '#306AC4',
    // },
    // screens: {
    //   tablet: '640px',
    //   cel: { max: '400px' },
    // },
    extend: {
      colors: {
        'new-blue': '#306AC4',
        gray: {
          ...colors.gray,
          900: '#999',
        },
      },
      spacing: {
        99: '100rem',
      },
    },
  },
  plugins: [],
};
