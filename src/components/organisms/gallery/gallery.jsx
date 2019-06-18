/* eslint-disable react/no-array-index-key */
import React from 'react';
import Img from 'gatsby-image';

import StyledGallery from './gallery.style';
import Box from '../../atoms/box/box';
import Headline from '../../atoms/headline/headline';

const Gallery = ({ gallery, heroText }) => (
  <StyledGallery>
    {gallery.map((image, index) => (
      <div key={`image__${index}`}>
        {image.childImageSharp ? (
          <Img fluid={image.childImageSharp.fluid} />
        ) : (
          <img src={image} alt="" />
        )}
        {index === 0 ? (
          <Headline className="gallery__heroText">{heroText}</Headline>
        ) : (
          <Box
            size={index === gallery.length - 1 ? 'xl' : 's'}
            hasPattern={index === gallery.length - 1}
            background={index === gallery.length - 1 ? 'white' : null}
          />
        )}
      </div>
    ))}
  </StyledGallery>
);

export default Gallery;
