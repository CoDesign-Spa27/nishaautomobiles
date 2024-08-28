 
/** @type {import('tailwindcss').Config} */
 export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        'Clash-bold':['Clash-bold','sans-serif'],
        'Clash-semibold':['Clash-semibold','sans-serif'],
        'Clash-medium':['Clash-medium','sans-serif']
      }
    },
  },
  plugins: [],
}
 