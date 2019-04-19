import React from 'react';
import Img from 'gatsby-image';

import StyledGallery from './gallery.style';

const Gallery = ({ gallery }) => (
  <StyledGallery>
    {gallery.map(image => (
      <Img fluid={image.childImageSharp.fluid} />
    ))}
  </StyledGallery>
);

export default Gallery;
