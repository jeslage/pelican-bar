import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { mq } from '../../../stylesheets/tools';

const StyledHeroImage = styled.div`
  width: 100%;
  height: calc(50vh - 60px);
  border-bottom: 8px solid #000;

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  ${mq('m')} {
    height: calc(100vh - 75px);
  }
`;

const HeroImage = ({ image }) => (
  <StyledHeroImage>
    {image.childImageSharp ? (
      <Img fluid={image.childImageSharp.fluid} />
    ) : (
      <img src={image} alt="" />
    )}
  </StyledHeroImage>
);

HeroImage.propTypes = {
  image: PropTypes.shape()
};

HeroImage.defaultProps = {
  image: {}
};

export default HeroImage;
