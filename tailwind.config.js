module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      time: '10px',
    },
    colors: {
      grey: {
        light: '#2F2A36',
        middle: '#1F1E26',
        dark: '#17161E',
        veryLight: '#A3A3A3',
        divider: '#3B3741',
        tableDark: '#24232C',
      },
      primary: {
        DEFAULT: '#8097FF',
      },
      white: { DEFAULT: '#ffffff' },
      black: { DEFAULT: '#000000' },
      green: { DEFAULT: '#00A389' },
      red: { DEFAULT: '#FF5B5B' },
      purple: { DEFAULT: '#AB54DB' },
      blue: { DEFAULT: '#167EE6' },
      yellow: { DEFAULT: '#FFD500' },
      orange: { DEFAULT: '#FE6C00' },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      screens: {
        '3xl': '1730px',
        xxs: '345px',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
        10: '10px',
      },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
