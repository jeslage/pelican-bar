import { breakpoints, colors } from '../settings';

/**
 * Simple CSS MediaQuery. Expects a breakpoint (string or number) and min or max string (default min).
 * @param {string} mediaQuery - Identifier for the breakpoint in the configuration file
 * @param {string} minMax - Default: min. String for the media-query type
 * @returns {string} Media query definition
 * @example ${mq('m', 'max')} { css styles go here };
 */
export function mq(mediaQuery, minMax = 'min') {
  if (typeof mediaQuery !== 'number' && typeof mediaQuery !== 'string') {
    throw new Error('mediaQuery must be a string or number');
  }

  const value = typeof mediaQuery === 'string' ? breakpoints[mediaQuery] : `${mediaQuery}px`;

  return `
    @media (${minMax}-width: ${value}) 
  `;
}

/**
 * Returns color from settings referenced by id
 * @param  {string} id - Identifier for the color in the configuration map. Default: #000
 * @returns {string} Resulting color from configuration file
 * @example color: ${getColor('white')};
 */
export function getColor(id = '#000') {
  if (!Object.prototype.hasOwnProperty.call(colors, id)) {
    throw new Error(`Color ${id} not known`);
  }
  return colors[id];
}

/**
 * CSS to reset button styling.
 * @returns {string}
 * @example ${btnReset()}
 */
export function btnReset() {
  return `
    appearance: none;
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }
  `;
}

/**
 * Transform px value to rem value.
 * @param {string} px - PX value as a number
 * @returns {string}
 * @example ${px2rem(25)}
 */
export const px2rem = px => `${px / 16}rem`;
