import React from 'react';
import Img from 'gatsby-image';

import StyledHero from './hero.style';

const Hero = ({ image }) => (
  <StyledHero>
    <Img fluid={image.childImageSharp.fluid} />

    <h1>The most fly bar in Hamburg</h1>
  </StyledHero>
);

export default Hero;
