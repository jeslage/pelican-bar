import React from 'react';
import Img from 'gatsby-image';

import StyledGallery from './gallery.style';
import Box from '../../atoms/box/box';

const randomValue = array => array[Math.floor(Math.random() * array.length)];

const backgrounds = ['green', 'purple', 'salmon', 'yellow', 'blue'];
const sizes = ['s', 'm', 'l', 'xl'];

const Gallery = ({ gallery }) => (
  <StyledGallery>
    {gallery.map(image => (
      <>
        <Img fluid={image.childImageSharp.fluid} />
        <Box background={randomValue(backgrounds)} size={randomValue(sizes)} />
      </>
    ))}
  </StyledGallery>
);

export default Gallery;
