import React from 'react';

import StyledHero from './hero.style';

const Hero = ({ image }) => (
  <StyledHero>
    <img src={image} />
  </StyledHero>
);

export default Hero;
