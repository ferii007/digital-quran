/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'defaultColor': '#9543FF',
        'primaryColor': '#763FBC',
        'defaultFontColor': '#240F4F',
        'secondFontColor': '#8789A3'
      },

      fontFamily: {
        gilgan: ["gilgan", "sans"],
      }
    },
  },
  plugins: [],
}