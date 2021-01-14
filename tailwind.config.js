const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: production,
  },
  darkMode: false,
  theme: {
    fontSize: {
      36: 36,
      24: 24,
      21: 21,
      18: 18,
      17: 17,
      16: 16,
      15: 15,
      14: 14,
      12: 12,
      10: 10,
    },
    colors: {
      white: 'white',
      gray: '#A9A9A9',
      black: 'black',
      mint: '#88FFCC',
      'blue-light': '#0A98FF',
      'blue-dark': '#0000CD',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
