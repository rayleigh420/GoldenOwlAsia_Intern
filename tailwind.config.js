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
      }
    },
  },
  plugins: [],
}

