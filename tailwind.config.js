/** @type {import("tailwindcss").Config} */
const tailwind = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./modules/**/*.{vue,ts}",
  ],

  theme: {
    fontFamily: {
      sans: [
        "Source Sans 3",
        "Source Sans Pro",
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
      ],
      serif: ["Merriweather", "serif"],
    },
    colors: ({ colors }) => ({
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      cyan: {
        ["400"]: "#67e8f9",
        ["500"]: "#06b6d4",
        ["600"]: "#0e7490",
      },
      brand: {
        red: "#bc1b19",
        "red-dark": "#c51d18",
        blue: "#112c5d",
        "blue-dark": "#0e1f44",
        violet: "#302950",
        ink: "#010101",
      },
    }),
    maxWidth: {
      none: "none",
      fit: "fit-content",
      full: "100%",
      max: "max-content",
      min: "min-content",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
    },
    aspectRatio: {
      auto: "auto",
      ["1/1"]: "1/1",
      ["1/2"]: "1/2",
      ["2/1"]: "2/1",
      ["4/3"]: "4/3",
      ["3/4"]: "3/4",
      ["16/9"]: "16/9",
      ["9/16"]: "9/16",
    },
    extend: {
      borderColor: { DEFAULT: "currentColor" },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },

  plugins: [
    // polyfill for future pseudo selector :enter that combines :hover and :focus
    ({ addVariant }) => addVariant("enter", ["&:hover", "&:focus"]),
    // lowers specifity to allow overrides
    ({ addVariant }) => addVariant("base", "html :where(&)"),
    // style direct children
    ({ addVariant }) => addVariant("children", "& > *"),
  ],
}

module.exports = tailwind
