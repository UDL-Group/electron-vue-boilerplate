module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Colors
      colors: {
        yellow: '#F2B94A',
        green: '#27AE60',
        black: {
          main: '#5C5C5F',
          dark: '#1E2958',
          light: '#A1A6BA',
          gray: '#8B91AA',
          border: '#E6E8F4'
        },
        white: {
          milk: '#F7FAFC',
          initial: '#FFFFFF'
        },
        blue: {
          main: '#5F7BF0',
          light: '#E2E8FF',
          bg: '#EFF2FF'
        },
        pink: {
          main: '#FCE1E9',
          light: '#B5BBD6',
          lighter: '#F5F7FF'
        }
      },

      // Spaces
      spaces: {
        100: '100px'
      },

      // Width
      width: {
        '7/10': '70%',
        '3/10': '30%'
      },

      // Font size
      fontSize: {
        44: '44px',
        28: '28px'
      },

      lineHeight: {
        110: '110%',
        120: '120%',
        130: '130%',
        140: '140%'
      },

      // Background images
      // backgroundImage: theme => ({
      //   nactive: "url('/images/categoryName/nactive.png')",
      //   active: "url('/images/categoryName/active.svg')"
      // })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
