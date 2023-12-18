/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Rakewat: "Raleway"
      },
      color: {
        primary: '#DA722C',
        secondary: '#6F7DFB',
      },
    },
  },
  plugins: [],
}

