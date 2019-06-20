import PropTypes from 'prop-types';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import pattern from '../../../images/pattern.png';

import StyledBox from './box.style';

const randomValue = array => array[Math.floor(Math.random() * array.length)];

const backgrounds = ['green', 'purple', 'salmon', 'yellow', 'blue', 'white'];
const sizes = ['s', 'm', 'l', 'xl'];

const Box = ({ background, size, hasPattern, noTopBorder, noBottomBorder }) => {
  const {
    allFile: { edges }
  } = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "pattern" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);

  const image = edges[0].node;
  const boxBackground = background || randomValue(backgrounds);
  const boxSize = size || randomValue(sizes);
  const boxPattern = hasPattern || boxBackground === 'white';

  const renderImage = () =>
    image.childImageSharp ? (
      <Img fluid={image.childImageSharp.fluid} />
    ) : (
      <img src={pattern} alt="" />
    );

  return (
    <StyledBox
      background={boxBackground}
      size={boxSize}
      noTopBorder={noTopBorder}
      noBottomBorder={noBottomBorder}
    >
      {boxPattern && size !== 'xs' && renderImage()}
    </StyledBox>
  );
};

Box.propTypes = {
  noTopBorder: PropTypes.bool,
  noBottomBorder: PropTypes.bool,
  hasPattern: PropTypes.bool,
  background: PropTypes.oneOf(['green', 'purple', 'salmon', 'yellow', 'blue', 'white']),
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl'])
};

Box.defaultProps = {
  noTopBorder: false,
  noBottomBorder: false,
  hasPattern: false,
  background: null,
  size: null
};

export default Box;
