import styled, { css } from 'styled-components';
import { mq, getColor } from '../../../stylesheets/tools/index';
import pattern from '../../../images/pattern.png';

const StyledBox = styled.div`
  width: 100%;
  height: calc(22vw - 30px);
  border-top: ${props => (!props.noTopBorder ? '8px solid #000' : '')};
  border-bottom: 8px solid #000;

  ${props =>
    props.hasPattern &&
    css`
      background-image: url(${pattern});
      background-size: 250%, auto, cover;
      background-blend-mode: multiply;
    `}

  ${mq('m')} {
    ${props =>
      props.size === 's' &&
      css`
        height: calc(10vw - 30px);
      `}

    ${props =>
      props.size === 'm' &&
      css`
        height: calc(15vw - 40px);
      `}
    
    ${props =>
      props.size === 'l' &&
      css`
        height: calc(22vw - 30px);
      `}

    ${props =>
      props.size === 'xl' &&
      css`
        height: calc(33.333vw - 30px);
      `}
  }


  ${props =>
    props.background &&
    css`
      background-color: ${getColor(props.background)};
    `}
`;

export default StyledBox;
