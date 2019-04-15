import React from 'react';
import Image from 'gatsby-image';

import StyledHero from './hero.style';

const Hero = ({ image }) => (
  <StyledHero>
    <Image fixed={image.childImageSharp.fixed} />
  </StyledHero>
);

export default Hero;
