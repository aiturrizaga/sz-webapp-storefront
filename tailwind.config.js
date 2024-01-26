const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--biensalud-primary)',
        secondary: 'var(--biensalud-secondary)',
        info: 'var(--biensalud-info)',
        danger: 'var(--biensalud-danger)',
        gray: colors.gray,
        green: colors.green,
        black: colors.black,
        white: colors.white
      }
    },
  },
  plugins: [],
}
