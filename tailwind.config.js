/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
  plugins: [require("tailwindcss-filters")],
};
