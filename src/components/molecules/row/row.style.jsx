import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools/index';

const StyledRow = styled.div`
  position: relative;
  width: 100%;
  border-top: 5px solid #000;

  ${mq('m')} {
    display: inline-block;
    height: 100vh;
    width: 33.33%;

    &:nth-of-type(2) {
      border-right: 5px solid #000;
      border-left: 5px solid #000;
    }
  }

  h3 {
    border-bottom: 5px solid black;
    padding: 19px 20px;
    margin: 0;
    font-size: 20px;
    height: 70px;
  }

  p {
    font-size: 20px;
  }

  .wrapper {
    ${mq('m')} {
      height: 100vh;
      overflow-x: auto;
    }
  }

  .content {
    padding: 25px;
  }
`;

export default StyledRow;
