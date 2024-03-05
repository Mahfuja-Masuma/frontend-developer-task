/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ["Inter", "sans-serif"],
       
      },
      colors: {
        'primary': '#4262FF',
        'secodary': '#FFC247',
        'tertinery': '#02033B',
        'fourth': '#050038',
        'five': '#FF9D48',
        'six': '#F5F5F7',

      },

    },
  },
  plugins: [],
}