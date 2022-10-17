/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      mobile: {'max': '780px'},
    },
    colors: {
      purple: "#F0ABFC",
      purpleDark: " #8629B3",
      black: "#000000",
      white: "#fff",
      error: "#FFD1D1",
      grey: "#888888",
      blueBG: "#8E8EDF"
    },
    textColor: {
      primary: "#8629B2",
      grey: "#888888",
      white: "#fff",
      error: "#FF0000",
    },
    extend: {},
  },
  plugins: [],
};
