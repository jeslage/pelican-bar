import PropTypes from 'prop-types';
import React from 'react';

import StyledHeadline from './headline.style';

const Headline = ({ tag, children, ...props }) => (
  <StyledHeadline as={tag} {...props}>
    {children}
  </StyledHeadline>
);

Headline.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'])
};

Headline.defaultProps = {
  children: '',
  tag: 'h2'
};

export default Headline;
