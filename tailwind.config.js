/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
import plugin from "tailwindcss/plugin";
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
       
        Nav:["Dancing Script"],
        Hero:["Inter"]
      }
    },
  },
  plugins: [Myclass],
}

