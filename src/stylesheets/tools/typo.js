import { fontFamilies, textTypes } from '../settings';
import { mq, px2rem } from './utility';

/**
 * Get text type
 * @param {string} type - type defined in settings. Default: "main"
 * @param {string} fontFamily - font-family defined in settings. Default: "default"
 * @param {bool} mediaQuery - defines if type has mediaQuery styles. Default: true
 * @returns {string} text type styles defined in settings
 * @example ${getTextType('copy', 'serif', false)};
 */
export default function getTextType(type = 'main', fontFamily = 'default', mediaQuery = true) {
  return `
    font-size: ${px2rem(textTypes[type].fontSize)};
    line-height:  ${
      typeof textTypes[type].lineHeight === 'number'
        ? `calc(${px2rem(textTypes[type].fontSize)} * ${textTypes[type].lineHeight})`
        : `${px2rem(textTypes[type].lineHeight)}`
    };
    ${textTypes[type].fontWeight ? `font-weight: ${textTypes[type].fontWeight}` : ''};
    font-family: ${fontFamilies[fontFamily]};
  
    ${
      mediaQuery && textTypes[type].m
        ? `${mq('m')} {
      font-size: ${px2rem(textTypes[type].m.fontSize)};
      line-height:  ${
        typeof textTypes[type].m.lineHeight === 'number'
          ? `calc(${px2rem(textTypes[type].m.fontSize)} * ${textTypes[type].m.lineHeight})`
          : `${px2rem(textTypes[type].m.lineHeight)}`
      };
    }`
        : ''
    }
    
    ${
      mediaQuery && textTypes[type].l
        ? `${mq('l')} {
      font-size: ${px2rem(textTypes[type].l.fontSize)};
      line-height:  ${
        typeof textTypes[type].l.lineHeight === 'number'
          ? `calc(${px2rem(textTypes[type].l.fontSize)} * ${textTypes[type].l.lineHeight})`
          : `${px2rem(textTypes[type].l.lineHeight)}`
      };
    }`
        : ''
    }
  `;
}
