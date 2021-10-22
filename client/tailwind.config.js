// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '90': 'calc(80%)',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
  
    extend: {
      colors: {
        zomato: {
          50: '#ffe5e7',
          100: '#fabac0',
          200: '#f18f96',
          300: '#e9626d',
          400: '#e23744',
          500: '#c81d2a',
          600: '#9d1520',
          700: '#700d16',
          800: '#46060c',
          900: '#1e0002',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
