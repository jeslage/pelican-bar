import React from 'react';
import Img from 'gatsby-image';

import StyledGallery from './gallery.style';
import Box from '../../atoms/box/box';

const randomValue = array => array[Math.floor(Math.random() * array.length)];

const backgrounds = ['green', 'purple', 'salmon', 'yellow', 'blue'];
const sizes = ['s', 'm', 'l', 'xl'];

const Gallery = ({ gallery }) => (
  <StyledGallery>
    {gallery.map((image, index) => (
      <div key={index}>
        {image.childImageSharp ? <Img fluid={image.childImageSharp.fluid} /> : <img src={image} />}
        <Box background={randomValue(backgrounds)} size={randomValue(sizes)} />
      </div>
    ))}
  </StyledGallery>
);

export default Gallery;
