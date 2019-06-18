import React from 'react';
import Img from 'gatsby-image';

import StyledGallery from './gallery.style';
import Box from '../../atoms/box/box';

const Gallery = ({ gallery }) => (
  <StyledGallery>
    {gallery.map((image, index) => (
      <div key={index}>
        {image.childImageSharp ? (
          <Img fluid={image.childImageSharp.fluid} />
        ) : (
          <img src={image} alt="" />
        )}
        <Box />
      </div>
    ))}
  </StyledGallery>
);

export default Gallery;
