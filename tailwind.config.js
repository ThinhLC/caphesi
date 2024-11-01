/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-main': 'var(--Color-main, #02BA8E)',
        'color-reduceconstract':'#D6FCF3',
        'color-footer':'#263238'
      },
      screens:{
        'xs':'480px'
      },
    },
  },
  plugins: [],
}