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
        pink: {
          500: '#8224e3',
        }
      },
    },
  },
  plugins: [],
}