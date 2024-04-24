/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      sm:"576px",
      md:"768px",
      lg:"992px",
      xl:"1200px",
      "2xl":"1200px"
    },
  },
  plugins: [],
}