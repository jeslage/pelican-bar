import React, { useRef } from 'react';

import StyledRow from './row.style';

const Row = ({ headline, children }) => {
  const rowRef = useRef(null);
  const handleClick = () => {
    if (rowRef.current) {
      rowRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };
  return (
    <StyledRow>
      <div className="row__headline">
        <h3>{headline}</h3>
      </div>
      <div className="row__wrapper" ref={rowRef}>
        {children}
        <button className="row__back-up" type="button" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="51.072" height="32.608">
            <path d="M3.537 29.071l22-22 22 22" fill="none" stroke="#000" strokeWidth="10" />
          </svg>
        </button>
      </div>
    </StyledRow>
  );
};

export default Row;
