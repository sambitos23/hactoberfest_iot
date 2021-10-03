module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // inset: {
      //   "1/2": "50%",
      //   "2/5": "40%",
      //   full: "100%",
      // },
      // zIndex: {
      //    '-1': '-1',
      // },
      colors: {
        primary: {
          default:"#F4F0E1",
          50: "#F74700",
          100: "#B53A25",
        },
        secondary: {
          default: "#DBE8D9",
          100: "#91A88C",
          200: "#677662",
          300: "#2C3532",
        },
      },
      // fontFamily: {
      //   custom: ['Comfortaa'],
      // },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
