const colors = {
  white: '#fff',
  black: '#000',
  gray: '#e8e8e8',
  lightGray: '#f4f4f4',
  purple: '#7d5387',
  yellow: '#e1b33c',
  green: '#4bbab7',
  salmon: '#f7bdb2',
  blue: '#444c9b'
};

// Breakpoints
const breakpoints = {
  xs: '375px',
  s: '480px',
  m: '768px',
  l: '940px',
  xl: '1280px'
};

// Spacings
const spacings = {
  s: '20px',
  m: '30px',
  l: '40px',
  xl: '60px'
};

// Grid
const maxWidth = '1120px';
const grid = {
  columns: 12,
  gutters: 10,
  debugColors: 'hsla(100, 100%, 50%, 0.2)'
};

// Fonts
const fontFamilies = {
  default: 'Helvetica, sans-serif'
};

const textTypes = {
  main: {
    fontWeight: 400,
    lineHeight: '40px',
    fontSize: '40px',
    m: {
      lineHeight: '54px',
      fontSize: '50px'
    }
  },
  subline: {
    fontWeight: 400,
    lineHeight: '32px',
    fontSize: '30px',
    m: {
      lineHeight: '40px',
      fontSize: '36px'
    }
  },
  copy: {
    fontWeight: 300,
    lineHeight: '30px',
    fontSize: '16px'
  },
  copySmall: {
    fontWeight: 300,
    lineHeight: '20px',
    fontSize: '14px'
  }
};

export { breakpoints, colors, fontFamilies, grid, maxWidth, spacings, textTypes };
