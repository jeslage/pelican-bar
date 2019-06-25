import { px2rem, mq } from './utility';

/**
 * Set the fluid font size
 *
 * For reference, check out:
 * - https://davidhellmann.com/blog/development/responsive-typography-modular-scale-und-fluid-type
 * - https://codepen.io/MadeByMike/pen/bEEGvv
 * - https://css-tricks.com/snippets/css/fluid-typography/
 *
 * @param {number} minFontSize - Minimum font size in pixels
 * @param {number} maxFontSize - Maximum font size in pixels
 * @param {number} scaleFrom - Minimum viewport width to start scaling
 * @param {number} scaleUntil - Maximum viewport width to stop scaling
 * @param {number} vw - Viewport width of container
 * @returns {string} Corresponding styled-component CSS
 */
export const fluidFontSize = (minFontSize, maxFontSize, scaleFrom, scaleUntil, vw = 100) => `
  font-size: ${minFontSize}px;

  @media (min-width: ${scaleFrom}px) {
    font-size: calc(${minFontSize}px + ${maxFontSize -
  minFontSize} * (${vw}vw - ${scaleFrom}px) / ${scaleUntil - scaleFrom});
  }
  @media (min-width: ${scaleUntil}px) {
    font-size: ${maxFontSize}px;
  }
`;

export const TypoHero = () => `
  font-family: 'Pelican Sans', Arial, sans-serif;
  line-height: 1.3;
  font-size: ${px2rem(60)};
  font-weight: normal;

  ${mq('m')} {
    font-size: ${px2rem(70)};
  }

  ${mq('xxl')} {
    font-size: ${px2rem(95)};
  }
`;

export const TypoCopy = () => `
  font-family: 'Lemur Medium', Arial, sans-serif;
  font-weight: normal;
  hyphens: auto;
  line-height: 1.5;
  ${fluidFontSize(20, 28, 340, 1440, 33.33)}
`;

export const TypoCopySmall = () => `
  font-family: 'Lemur Medium', Arial, sans-serif;
  font-weight: normal;
  hyphens: auto;
  ${fluidFontSize(12, 16, 340, 1440)}
  line-height: 1.5; 
`;
