/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        frame: "url('/src/assets/frame.png')",
      },
      boxShadow: {
        mainShadow: "-10px 15px 30px -2px  #c24498",
      },
    },
  },
};
