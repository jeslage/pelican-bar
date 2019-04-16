import styled from 'styled-components';

const StyledHero = styled.section`
  position: relative;
  height: calc(100vh - 134px);
  width: 100%;
  overflow: hidden;
  margin-top: 59px;

  .gatsby-image-wrapper {
    width: 100%;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -85%);
    font-family: 'Pelican Sans', sans-serif;
    font-size: 100px;
    line-height: 1;
    text-align: center;
    color: #fff;
  }
`;

export default StyledHero;
