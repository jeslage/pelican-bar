import PropTypes from 'prop-types';
import React from 'react';

import StyledBox from './box.style';

const randomValue = array => array[Math.floor(Math.random() * array.length)];

const backgrounds = ['green', 'purple', 'salmon', 'yellow', 'blue', 'white'];
const sizes = ['s', 'm', 'l', 'xl'];

const Box = ({ background, size, hasPattern, noTopBorder, noBottomBorder }) => {
  const boxBackground = background || randomValue(backgrounds);
  const boxSize = size || randomValue(sizes);
  const boxPattern = hasPattern || boxBackground === 'white';

  return (
    <StyledBox
      background={boxBackground}
      hasPattern={boxPattern}
      size={boxSize}
      noTopBorder={noTopBorder}
      noBottomBorder={noBottomBorder}
    />
  );
};

Box.propTypes = {
  noTopBorder: PropTypes.bool,
  noBottomBorder: PropTypes.bool,
  hasPattern: PropTypes.bool,
  background: PropTypes.oneOf(['green', 'purple', 'salmon', 'yellow', 'blue', 'white']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl'])
};

Box.defaultProps = {
  noTopBorder: false,
  noBottomBorder: false,
  hasPattern: false,
  background: null,
  size: null
};

export default Box;
