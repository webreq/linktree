/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        thisOrange:'#E14D2A',
        thisWhite:'#EAEAEA',
        thisPurple:'#432C7A',
        thisPink:'#FF8FB1',
        thisDarkGrey:'#404258',
        thisGreen:'#3A8891',
        thisAnotherOrange:'#E97777',
        thisBrown:'#3C2317',
        calm:'#FFF7E9'
      }
    },
    fontFamily:{
      roboto: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}
