import styled from 'styled-components';

const StyledMarquee = styled.div`
  position: relative;
  padding: 20px 0;
  overflow: hidden;
  border-bottom: 5px solid black;

  .marquee__inner {
    display: inline-block;
  }

  .marquee__content {
    animation: marquee 120s linear infinite;
    white-space: nowrap;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export default StyledMarquee;
