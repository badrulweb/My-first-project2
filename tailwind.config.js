/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF8',
          100: '#FAF7F0',
          200: '#F3EEE2',
          300: '#EAE2CF',
        },
        champagne: {
          100: '#F5EBD8',
          200: '#EBD9B4',
          300: '#DEC28A',
          400: '#CBA964',
          500: '#B89554',
          600: '#9C7A42',
        },
        beige: {
          100: '#F1EBE3',
          200: '#E5DCCE',
          300: '#D4C6B0',
        },
        charcoal: {
          400: '#5C5A56',
          600: '#3A3835',
          800: '#211F1D',
          900: '#161513',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
};
