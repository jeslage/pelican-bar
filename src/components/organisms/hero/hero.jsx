import React from 'react';
import Img from 'gatsby-image';

import StyledHero from './hero.style';

const Hero = ({ image }) => (
  <StyledHero>
    <Img fluid={image.childImageSharp.fluid} />
  </StyledHero>
);

export default Hero;
