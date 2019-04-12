import React from 'react';

import StyledBox from './box.style';

const Box = ({ background, size, hasPattern }) => (
  <StyledBox background={background} hasPattern={hasPattern} size={size} />
);

export default Box;
