/** @type {import('tailwindcss').Config} */
const data = require('utils/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,json}",
    "../../packages/utils/*.{js,ts,jsx,tsx,json}"
  ],
  theme: {
    extend: {
      colors: {
        ...data
      }
    }
  },
  plugins: [],
}
