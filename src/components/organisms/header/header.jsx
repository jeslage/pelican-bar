import React from 'react';
import { Link } from 'gatsby';

import { PelicanType, PelicanSignet } from '../../icons/logo';
import StyledHeader from './header.style';

const Header = ({ title }) => (
  <StyledHeader>
    <Link to="/" aria-label={`${title} Startseite`}>
      <div className="header__logo">
        <PelicanType />
      </div>
      <div className="header__signet">
        <PelicanSignet />
      </div>
    </Link>
  </StyledHeader>
);

export default Header;
