/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        whiteG: ["#FFFFFF"],
        blackG: ["#303841"],
        grayG: ["#777777"],
        yellowG: ["#F6C90E"],
      },
      boxShadow: {
        itemShadow: ['0 3.2px 2.2px rgba(0,0,0,.02), 0 7px 5.4px rgba(0,0,0,.028), 0 12.1px 10.1px rgba(0,0,0,.035), 0 19.8px 18.1px rgba(0,0,0,.042), 0 34.7px 33.8px rgba(0,0,0,.05), 0 81px 81px rgba(0,0,0,.07)']
      },
      cartItem: {
        transform: ['rotate(-28deg) translateY(-40px)'],
        filter: ['drop-shadow(0 30px 20px rgba(0,0,0,.2))']
      }
    },
  },
  plugins: [],
}

