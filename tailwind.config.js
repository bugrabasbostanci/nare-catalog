/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],

  theme: {
    extend: {
      colors: {
        "primary-50": "#f9f3d3",
        "primary-100": "rgba(253, 247, 195, 1)",
        "primary-200": "#f5eb8f",
        "primary-400": "rgba(178, 164, 255, 1)",
        "secondary-400": "rgb(255, 179, 179)",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        opensans: ["Open Sans"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      boxShadow: {
        bottom: " rgb(38, 57, 77) 0px 20px 30px -10px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
