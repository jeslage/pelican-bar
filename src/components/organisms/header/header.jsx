import React from 'react';
import { Link } from 'gatsby';

import StyledHeader from './header.style';

const Header = ({ title }) => (
  <StyledHeader>
    <Link to="/">{title}</Link>
  </StyledHeader>
);

export default Header;
