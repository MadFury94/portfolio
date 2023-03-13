// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      slate: colors.slate,
      green: colors.green,
    },

    extend: {},
  },
  // eslint-disable-next-line no-undef

  plugins: [require("@tailwindcss/typography")],
};
