/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gaegu', 'sans-serif'],
      },
      colors: {
        'soft-bg': '#eef2f6',
      },
    },
  },
  plugins: [],
};
