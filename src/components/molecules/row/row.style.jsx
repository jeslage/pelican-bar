import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools/index';

const StyledRow = styled.div`
  position: relative;
  width: 100%;

  ${mq('m')} {
    height: 100vh;

    &:nth-of-type(2) {
      border-right: 8px solid #000;
      border-left: 8px solid #000;
    }
  }

  .row__headline {
    display: flex;
    align-items: center;
    height: 70px;
    border-bottom: 8px solid black;
    padding: 0 20px;
    background: #fff;
    margin: 0;

    h3  {
      font-size: 20px;
    }
  }

  .row__wrapper {
    ${mq('m')} {
      height: calc(100vh - 70px);
      overflow-x: auto;
    }
  }
`;

export default StyledRow;
