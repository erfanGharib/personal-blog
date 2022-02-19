module.exports = {
  purge: [
    './*.html',
    './components/*.html',
    './components/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '100': '30rem',
        '110': '47rem',
      },
      width: {
        '2/7':'32%',
      },
      colors: {
        darkGray: '#535353',
        lightGray: '#cdcdcd',
        lightGreen: '#28ccb5'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
