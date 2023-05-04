/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit', // use arbitrary CSS statements
  theme: {
    extend: {
      colors: {
        'colorSearchIcon' : '#8de8fe'
      },
      fontSize: {
        'sizeIcon': '2rem',
      },
    },
    screens:{
      'sm': {
        'min':'550px'
      }
    }
  },
  plugins: [],
}

