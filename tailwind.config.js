/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        bun: '#e5cb7a',
        ketchup: '#ec3722',
        lightketchup: '#ff725a',
        lettuce: '#32c704',
        patty: '#450101',
        lightpatty: 'rgba(69, 1, 1, 0.49)',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--bun': theme('colors.bun'),
          '--ketchup': theme('colors.ketchup'),
          '--lightketchup': theme('colors.lightketchup'),
          '--patty': theme('colors.patty'),
        },
      });
    },
  ],
};
