import React from 'react';
import { Link } from 'gatsby';
import StyledHeader from './header.style';

const Header = ({ title }) => (
  <StyledHeader>
    <Link to="/">{title}</Link>
    <a
      href="https://www.opentable.com/r/la-casa-di-lucia-reservations-philadelphia?restref=412810&lang=en-US"
      target="_blank"
      rel="noopener noreferrer"
    >
      Reservieren
    </a>
  </StyledHeader>
);

export default Header;
