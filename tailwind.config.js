const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
    },
    extend: {
      colors: {
        neutral: {
          75: '#f1f1f1',
          925: '#0e0e0e'
        }
      },
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}

