/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        cidade: 'url(/img/bg_cidade.jpg)',
        tailwind: 'url(/img/tailwind.png)',
      }),
    },
  },
  plugins: [],
};
