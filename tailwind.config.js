/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chelsea-blue': '#034694',     // Classic Royal
        'chelsea-bright': '#005AD0',   // 25/26 Clash Blue
        'chelsea-gold': '#DBA111',     // Trophy Gold
        'chelsea-dark': '#021a36',     // Deep Navy depth
      },
      fontFamily: {
        'chelsea': ['Inter', 'sans-serif'], // Chelsea uses clean, bold sans-serif
      }
    },
  },
  plugins: [],
}