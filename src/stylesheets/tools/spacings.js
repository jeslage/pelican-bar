import { spacings } from '../settings';
import { px2rem } from './utility';
/**
 * Returns spacing from settings referenced by id
 * @param  {string} id - Identifier for the space in the configuration map or a string e.g. '12px'
 * @return {number} Resulting space from configuration file
 * @returns {string} Space value
 * @example padding: ${getSpace('m')};
 */

export default function getSpace(id) {
  const spacing = px2rem(Object.prototype.hasOwnProperty.call(spacings, id) ? spacings[id] : id);

  return spacing;
}
