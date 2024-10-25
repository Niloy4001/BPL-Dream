/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark': '#131313',
      'white': '#ffffff',
      'orange': '#E7FE29',
      'dark-2': '#141414',
      'dark-3': '#06091A',
      'purple': '#c084fc',
      'amber': '#fbbf24',
    },
  },
  plugins: [require('daisyui')],
}