/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url('./components/assets/images/bg.svg')",
        'img': "url('./components/assets/images/img.svg')",
        'vector': "url('./components/assets/images/vector.svg')",
        'clock': "url('./components/assets/images/clock.svg')",
        'earth': "url('./components/assets/images/earth.svg)"
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

