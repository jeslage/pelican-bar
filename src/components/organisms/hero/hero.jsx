import React from 'react';
import Img from 'gatsby-image';

import StyledHero from './hero.style';

const Hero = ({ image, headline }) => (
  <StyledHero>
    <Img fluid={image.childImageSharp.fluid} />

    {headline && <h1>{headline}</h1>}
  </StyledHero>
);

export default Hero;
