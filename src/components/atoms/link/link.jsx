import React from 'react';

import StyledLink from './link.style';

const Link = ({ href, target, children }) => (
  <StyledLink href={href} target={target} rel="noopener noreferrer">
    {children}
  </StyledLink>
);

export default Link;
