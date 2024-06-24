/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'BethGreen': '#074e48',
        'BethGold': '#CC3119'
      }
    },
  },
  plugins: [],
}