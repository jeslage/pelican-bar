import React from 'react';

import StyledRow from './row.style';

const Row = ({ headline, children }) => (
  <StyledRow>
    <div className="row__headline">
      <h3>{headline}</h3>
    </div>
    <div className="row__wrapper">{children}</div>
  </StyledRow>
);

export default Row;
