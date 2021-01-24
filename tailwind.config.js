const defaultTheme = require('tailwindcss/defaultTheme');
const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles');

module.exports = {
  purge: {
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      defaultExtractor: (content) => [
        ...tailwindExtractor(content),
        // Match Svelte class: directives (https://github.com/tailwindlabs/tailwindcss/discussions/1731)
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
      ],
      keyframes: true,
    },
  },
  darkMode: false,
  theme: {
    fontFamily: {
      heading: ['Kondolar Thai', ...defaultTheme.fontFamily.serif],
      subtitle: ['Anuphan', ...defaultTheme.fontFamily.sans],
      body: ['Bai Jamjuri', ...defaultTheme.fontFamily.sans],
    },
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
    cursor: {
      handle: 'ew-resize',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
