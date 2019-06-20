import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Img from 'gatsby-image';

import pattern from '../../../images/pattern.png';

import StyledBox from './box.style';
import { PatternContext } from '../../context/PatternContext';

const randomValue = array => array[Math.floor(Math.random() * array.length)];

const backgrounds = ['green', 'purple', 'salmon', 'yellow', 'blue', 'white'];
const sizes = ['s', 'm', 'l', 'xl'];

const Box = ({ background, size, hasPattern, noTopBorder, noBottomBorder }) => {
  const { patternBackground } = useContext(PatternContext);

  const boxBackground = background || randomValue(backgrounds);
  const boxSize = size || randomValue(sizes);
  const boxPattern = hasPattern || boxBackground === 'white';

  const renderImage = () =>
    patternBackground && patternBackground.childImageSharp ? (
      <Img fluid={patternBackground.childImageSharp.fluid} />
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
