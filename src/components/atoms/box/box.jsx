import React from 'react';

import StyledBox from './box.style';

const Box = ({ background, size, hasPattern, noTopBorder }) => (
  <StyledBox
    background={background}
    hasPattern={hasPattern}
    size={size}
    noTopBorder={noTopBorder}
  />
);

export default Box;
