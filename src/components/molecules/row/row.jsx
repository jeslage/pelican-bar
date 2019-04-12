import React from 'react';

import StyledRow from './row.style';

const Row = ({ headline, children }) => (
  <StyledRow>
    <h3>{headline}</h3>
    <div className="content">{children}</div>
  </StyledRow>
);

export default Row;
