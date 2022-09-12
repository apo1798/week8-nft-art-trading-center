/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '960px',
      lg: 'calc(1296px + 2.5rem)',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
      },
    },
    extend: {
      colors: {
        primary: '#E6553B',
        'gray-light': '#F0F0F0',
        'gray-medium': '#00000029',
        'gray-dark': '#808080',
      },
      fontFamily: {
        sans: [
          '"Squada One"',
          '"Noto Sans TC"',
          ...defaultTheme.fontFamily.sans,
        ],
        paytone: '"Paytone One"',
        squada: '"Squada One"',
        'noto-sans-tc': '"Noto Sans TC"',
      },
      borderWidth: {
        16: '16px',
        24: '24px',
      },
      fontSize: {
        0: 0,
        '3.5xl': ['2rem', '2.875rem'],
        '7.5xl': ['5rem', '5.3125rem'],
      },
    },
  },
  plugins: [],
};
