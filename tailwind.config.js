/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          'primary': '#111315',
          'secondary': '#1B1D1F',
          'tertiary': '#6F757C',
        },
        'light': {
          'primary': '#FEF7EE',
          'secondary': '#BEE3CC',
          'tertiary': '#F6C768',
        },
        'rose': '#ED735D'
      },
      fontFamily: {
        'dmsans': [
          '"DM Sans"', 
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}

