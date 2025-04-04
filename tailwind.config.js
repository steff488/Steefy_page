/**@type {import('tailwindcss').Config} */
const { height } = require("@fortawesome/free-solid-svg-icons/fa0");
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
        barGlow: "0px 0px 10px 5px #ff31ba",
      },
      dropShadow: {
        mainDropShadow: "-10px 15px 30px -2px  #c24498",
      },
      animation: {
        floatUpDown: "floatUpDown 10s ease-in-out infinite",
        holographic: "holographic 5s infinite alternate",
        textFade: "textFade 2s infinite",
        fadeIn: "fadeIn 0.1s forwards",
        dashUp: "dashUp 5s linear infinite",
        clipMouth: "clipMouth 1s linear infinite alternate",
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
        clipPath: {
          navbar:
            "polygon(0.22% 15.3%, 2% 2%, 30.9% 2%, 32.09% 9.48%, 65.8% 9.48%, 66.1% 12.1%, 98.2% 12.1%, 99.79% 25%, 99.79% 84.8%, 98.05% 98.05%, 69.1% 98.05%, 67.95% 90.5%, 34.2% 90.5%, 33.9% 87.9%, 1.8% 87.9%, 0.22% 75.4%)",
        },
        textFade: {
          "0%": { opacity: "0" },
          "8%": { opacity: "1" },
          "20%": { opacity: "0" },
          "30%": { opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "8%": { opacity: "1" },
          "15%": { opacity: "1" },
          "30%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        dashUp: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 -197px" },
        },
        clipMouth: {
          "0%": {
            clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%, 50% 50%)",
          },
          "100%": {
            clipPath:
              "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 100%)",
          },
        },
      },
      transitionProperty: {
        height: "height",
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
