const {
  PRIMARY,
  SECONDARY,
  WARNING,
  BLUE_80,
  BLUE_60,
  BLUE_10,
  GRAY
} = require('./src/constants/colors.js')

module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],
  prefix: '_bw-',
  theme: {
    extend: {
      colors: {
        primary: PRIMARY,
        secondary: SECONDARY,
        gray: {
          DEFAULT: GRAY
        },
        warning: WARNING,
        blue: {
          80: BLUE_80,
          60: BLUE_60,
          10: BLUE_10
        }
      }
    }
  },
  plugins: []
}
