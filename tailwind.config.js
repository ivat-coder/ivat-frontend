/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:[ "Poppins", "sans-serif"],
        LondrinaOutline:["Londrina Outline", "sans-serif"],
        workSans:[ "Work Sans", "sans-serif"],
        inter:["Inter", "sans-serif"],
        PlayFair:["Playfair Display", "serif"]
      },
      backdropBlur: {
        'custom': '8px', // custom blur value
      }
    },
  },
  plugins: [],
}

