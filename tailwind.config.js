module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#383a45',
          200:'#29292d'
        },
        gray:{
          100:'#e7edf2',
          200:'#626c72',
          400:'#f8f9fb'
        },
        pink: {
          500: '#8224e3',
        }
      },
    },
  },
  plugins: [],
}