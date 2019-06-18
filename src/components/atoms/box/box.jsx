import PropTypes from 'prop-types';
import React from 'react';

import StyledBox from './box.style';

const randomValue = array => array[Math.floor(Math.random() * array.length)];

const backgrounds = ['green', 'purple', 'salmon', 'yellow', 'blue', 'white'];
const sizes = ['s', 'm', 'l', 'xl'];

const Box = ({ background, size, hasPattern, noTopBorder }) => {
  const randomBackground = hasPattern ? 'white' : randomValue(backgrounds);
  const randomSize = randomValue(sizes);
  const pattern = randomBackground === 'white';

  return (
    <StyledBox
      background={background || randomBackground}
      hasPattern={hasPattern || pattern}
      size={size || randomSize}
      noTopBorder={noTopBorder}
    />
  );
};

Box.propTypes = {
  noTopBorder: PropTypes.bool,
  hasPattern: PropTypes.bool,
  background: PropTypes.oneOf(['green', 'purple', 'salmon', 'yellow', 'blue', 'white']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl'])
};

Box.defaultProps = {
  noTopBorder: false,
  hasPattern: false,
  background: null,
  size: null
};

export default Box;
