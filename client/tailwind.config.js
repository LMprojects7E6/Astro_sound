/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { max: "780px" },
    },
    colors: {
      purple: "#F0ABFC",
      purpleDark: "#8629B3",
      purple2: "#8629B2",
      purple3: "#220B28",
      black: "#000000",
      white: "#fff",
      grey: "#888888",
      grey2: "#383838",
      grey3: "#535353",
      grey4: "#717171",
      grey5: "#282828",
      error: "#FFD1D1",
    },
    textColor: {
      primary: "#8629B2",
      grey: "#888888",
      black: "#000000",
      white: "#fff",
      error: "#FF0000",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
