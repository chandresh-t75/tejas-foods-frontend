/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "green": "#39DB4A",
        "red": "#FF6868",
        "secondary": "#555",
        "prigmayBG": "#FCFCFC",
        "mainRed":"#FF1E00",
        "lightBlue":"#00092C",
        "lightBlack":"#1B1B2F",
      }
    },
  },
  plugins: [require("daisyui")],
}
