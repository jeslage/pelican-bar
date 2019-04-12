import React from 'react';

import StyledMarquee from './marquee.style';

const Marquee = ({ text }) => (
  <StyledMarquee>
    <div className="marquee__inner">
      <div className="marquee__content">
        <span>{text}</span>
      </div>
    </div>
  </StyledMarquee>
);

export default Marquee;
