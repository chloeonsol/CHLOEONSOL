/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chloePurple: "#7D3C98",
        chloeWhite: "#FFFFFF",
        chloeLightPurple: "#9B59B6",
        chloeDarkPurple: "#5D2A9F",
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
        display: ["'Bebas Neue'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
