import React from 'react';
import { Link } from 'gatsby';

import { PelicanType, PelicanSignet } from '../../icons/logo';
import StyledHeader from './header.style';

const Header = ({ isVertical, title }) => (
  <StyledHeader isVertical={isVertical}>
    <div className="header__logo">
      <Link to="/" aria-label={`${title} Startseite`}>
        <PelicanType />
      </Link>
    </div>
    <div className="header__signet">
      <PelicanSignet />
    </div>
  </StyledHeader>
);

export default Header;
