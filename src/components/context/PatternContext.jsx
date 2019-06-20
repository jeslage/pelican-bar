import PropTypes from 'prop-types';
import React from 'react';

export const PatternContext = React.createContext();

const PatternProvider = ({ patternBackground, children }) => {
  return (
    <PatternContext.Provider
      value={{
        patternBackground
      }}
    >
      {children}
    </PatternContext.Provider>
  );
};

export const PatternConsumer = PatternContext.Consumer;

PatternProvider.propTypes = {
  children: PropTypes.node
};

PatternProvider.defaultProps = {
  children: ''
};

export default PatternProvider;
