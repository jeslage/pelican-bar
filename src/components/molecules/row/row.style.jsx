/* eslint-disable no-irregular-whitespace */
import styled from 'styled-components';
import { mq, px2rem } from '../../../stylesheets/tools/index';
import { TypoCopy } from '../../../stylesheets/tools/typo';

const StyledRow = styled.div`
  position: relative;
  display: block;
  width: 100%;

  ${mq('l')} {
    display: inline-block;
    height: 100vh;
    width: 33.33%;

    &:nth-of-type(2) {
      border-right: 8px solid #000;
      border-left: 8px solid #000;
    }
  }

  .row__headline {
    position: sticky;
    height: 60px;
    display: flex;
    align-items: center;
    top: 0;
    border-bottom: 8px solid black;
    background: #fff;
    margin: 0;
    z-index: 1;
    padding: ${px2rem(15)} ${px2rem(20)};

    ${mq('l')} {
      height: 75px;
      padding: ${px2rem(15)} ${px2rem(30)};
    }

    h3  {
      ${TypoCopy}
      margin: 0;
      line-height: 1;
      font-weight: normal;
    }
  }

  .row__wrapper {
    position: relative;

    ${mq('l')} {
      height: calc(100vh - 73px);
      overflow-y: auto;
    }
  }

  .row__back-up {
    width: 100%;
    display: none;
    padding: ${px2rem(15)} ${px2rem(30)};

    ${mq('l')} {
      display: block;
    }

    svg {
      transition: transform 0.2s ease-in-out;
    }

    &:hover {
      svg {
        transform: translateY(-3px);
      }
    }
  }
`;

export default StyledRow;
