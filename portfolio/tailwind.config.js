/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ativa dark mode via classe
  theme: {
    extend: {
      colors: {
        primary: "#25f46a",
        "background-dark": "#000000",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"], // sempre coloque fallback
      },
      
    },
  },
  plugins: [],
};