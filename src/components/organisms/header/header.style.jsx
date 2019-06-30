import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools/index';

const StyledHeader = styled.header`
  a {
    position: fixed;
    height: 55px;
    top: 0;
    background: #fff;
    z-index: 99;
    border-bottom: 8px solid black;
    padding: 0;
    width: 100vh;
    left: -100vh;
    transform: rotate(-90deg);
    transform-origin: top right;
    display: flex;
    align-items: center;

    ${mq('m')} {
      height: 70px;
    }
  }

  .header__logo {
    flex-grow: 2;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .header__signet {
    display: flex;
    align-items: center;
    text-align: right;
    padding: 0 10px;

    svg {
      transform: rotate(90deg);
    }
  }

  svg {
    transform-origin: center;
    height: 40px;

    ${mq('m')} {
      height: 50px;
    }
  }
`;

export default StyledHeader;
