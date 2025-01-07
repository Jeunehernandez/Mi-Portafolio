/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "Color-principal": "hsl(222, 47%, 11%)",
        "color-secundario": "hsl(189, 99%, 70%)"
      },

      fontFamily:{
        "principal": ['"Be Vietnam Pro"', 'sans-serif']
      },

      backgroundImage:{
        "close-menu": "url('../images/icon-close.svg')",
        "open-menu": "url('../images/icon-hamburger.svg')",
        "imagen-perfil": "url('../images/Foto_Josue.JPG')"
      },

      maxWidth:{
        "50ch": "50ch"
      },
    },
  },
  plugins: [],
}

