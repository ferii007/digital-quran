/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'defaultColor': '#9543FF',
        'primaryColor': '#763FBC'
      },

      fontFamily: {
        gilgan: ["gilgan", "sans"],
      }
    },
  },
  plugins: [],
}