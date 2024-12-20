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
        DEFAULT: "-5px 5px 3px #161616c6",
        // DEFAULT: "0px 0px 25px var(--tw-shadow-color)",
        // lg: "0 8px 16px var(--tw-shadow-color)",
      },
      backgroundImage: {
        frame: "url('/src/assets/frame3c.png')",
        "mesh-noise": "url('/src/assets/background-mesh-noise.png')",
        "gradient-mesh":
          "radial-gradient(at 54.7% 100%, #6e2c7d 0px, transparent 50%), radial-gradient(at 96.3% 58.1%, #452b91 0px, transparent 50%), radial-gradient(at 1.5% 0.5%, #621e4e 0px, transparent 50%) #140f25",
      },
      boxShadow: {
        mainBoxShadow: "-10px 15px 30px -2px  #c24498",
      },
      dropShadow: {
        mainDropShadow: "-10px 15px 30px -2px  #c24498",
      },
      animation: {
        floatUpDown: "floatUpDown 10s ease-in-out infinite",
        holographic: "holographic 5s infinite alternate",
      },
      keyframes: {
        floatUpDown: {
          "0%, 100%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-25px)" },
        },
        screens: {
          sm: "576px",
          md: "960px",
          lg: "1440px",
        },
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
