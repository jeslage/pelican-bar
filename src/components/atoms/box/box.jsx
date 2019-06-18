import React from 'react';

import StyledBox from './box.style';

const randomValue = array => array[Math.floor(Math.random() * array.length)];

const backgrounds = ['green', 'purple', 'salmon', 'yellow', 'blue'];
const sizes = ['s', 'm', 'l', 'xl'];

const Box = ({ background, size, hasPattern, noTopBorder }) => (
  <StyledBox
    background={background || randomValue(backgrounds)}
    hasPattern={hasPattern}
    size={size || randomValue(sizes)}
    noTopBorder={noTopBorder}
  />
);

export default Box;
