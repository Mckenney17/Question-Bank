/* eslint-disable import/no-extraneous-dependencies */
const tailwindScrollbar = require("tailwind-scrollbar");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        prim: colors.amber,
      },
    },
  },
  plugins: [tailwindScrollbar],
};
