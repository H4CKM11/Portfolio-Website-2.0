/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : " 'Poppins', sans-serif"
      },
      colors: {
        moneyGreen :'#00d631'
      }
    },
  },
  plugins: [],
}

