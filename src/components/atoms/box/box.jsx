import React from 'react';

import StyledBox from './box.style';

const Box = ({ background, size, pattern, noTopBorder }) => {
  const patternBool = pattern === true || pattern === 'true' ? true : false;
  return (
    <StyledBox
      background={background}
      hasPattern={patternBool}
      size={size}
      noTopBorder={noTopBorder}
    />
  );
};

export default Box;
