const {
  PRIMARY,
  SECONDARY,
  WARNING,
  BLUE_80,
  BLUE_60,
  BLUE_10,
  NEUTRAL,
  GREEN_80,
  GREEN_10
} = require('./src/constants/colors.js')

module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        0.5: '0.125rem',
        1.5: '0.375rem',
        2.5: '0.625rem',
        3.5: '0.875rem'
      },
      colors: {
        primary: PRIMARY,
        secondary: SECONDARY,
        neutral: NEUTRAL,
        warning: WARNING,
        blue: {
          80: BLUE_80,
          60: BLUE_60,
          10: BLUE_10
        },
        green: {
          80: GREEN_80,
          10: GREEN_10
        }
      }
    }
  },
  plugins: []
}
