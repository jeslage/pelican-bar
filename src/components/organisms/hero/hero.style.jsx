import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools/index';

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
    font-size: 15vw;
    line-height: 1;
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.75);

    ${mq('l')} {
      font-size: 8vw;
    }
  }
`;

export default StyledHero;
