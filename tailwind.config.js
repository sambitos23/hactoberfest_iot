module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
