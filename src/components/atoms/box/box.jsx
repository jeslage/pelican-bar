import React from 'react';

import StyledBox from './box.style';

const Box = ({ background, size, hasPattern, noTopBorder }) => {
  const patternBool = hasPattern === true || hasPattern === 'true' ? true : false;

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
