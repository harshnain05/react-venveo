/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  backgroundImage: {
    'hero': './assets/image/png/Isolation_Mode.png'
  },
  theme: {
    extend: {
      colors: {
        primary: '#097980',
        YellowLite: '#D2F038'
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