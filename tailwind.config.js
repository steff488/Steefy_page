/**@type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide"],
      },
      textShadow: {
        nav: "0px 0px 15px var(--navbar-text-shadow)",
        navActive: "0px 0px 25px var(--navbar-text-shadow-active)",
        // DEFAULT: "0px 0px 25px var(--tw-shadow-color)",
        // lg: "0 8px 16px var(--tw-shadow-color)",
      },
      backgroundImage: {
        frame: "url('/src/assets/frame3c.png')",
      },
      boxShadow: {
        mainBoxShadow: "-10px 15px 30px -2px  #c24498",
      },
      dropShadow: {
        mainDropShadow: "-10px 15px 30px -2px  #c24498",
      },
    },
  },
  plugins: [
    require("tailwindcss-filters"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
