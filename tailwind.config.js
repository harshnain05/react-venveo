/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  backgroundImage: {
    'hero': './assets/image/png/Isolation_Mode.png'
  },
      colors: {
      "greendrk": "#097980",
      "yellowGreen": "#D2F038",
    },
  theme: {
    extend: {
      colors: {
        'cloudy-blue': '#9dc9cc',
        'lemon-lime': '#D2F038',
       
      },
      fontFamily: {
        sohne: ["Sohne Schmal", "sans-serif"],
        maisonneue: ["maisonneue", "serif"],
        maisonneuelight: ["maisonneuelight", "serif"],
      },
    },
  },
  plugins: [],
}