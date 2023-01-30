/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary:'hsl(233, 47%, 7%)',
      whitestat: 'hsla(var(--white-stat-heading) / <alpha-value>)',
      white: 'hsla(0, 0%, 100%, 0.6)',
      container: 'hsl(244, 38%, 16%)',
      softviolet: 'hsl(277, 64%, 61%)',
    },
    fontFamily:{
      'mine':['Inter', 'sans-serif'],
      'decca': ['Lexend Deca', 'sans-serif']
    }
  },
  plugins: [],
}