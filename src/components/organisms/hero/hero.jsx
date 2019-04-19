import React from 'react';
import Img from 'gatsby-image';

import StyledHero from './hero.style';

const Hero = ({ image, headline }) => (
  <StyledHero>
    {image.childImageSharp ? <Img fluid={image.childImageSharp.fluid} /> : <img src={image} />}

    {headline && <h1>{headline}</h1>}
  </StyledHero>
);

export default Hero;
