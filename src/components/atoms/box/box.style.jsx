import styled, { css } from 'styled-components';
import { mq, getColor } from '../../../stylesheets/tools/index';
import pattern from '../../../images/pattern.png';

const StyledBox = styled.div`
  width: 100%;
  height: calc(33.333vw - 30px);
  background-color: ${getColor('white')};
  border-top: ${props => (!props.noTopBorder ? '5px solid #000' : '')};
  border-bottom: 5px solid #000;

  ${mq('m')} {
    ${props =>
      props.size === 's' &&
      css`
        height: 10vw;
      `}

    ${props =>
      props.size === 'm' &&
      css`
        height: 15vw;
      `}
    
    ${props =>
      props.size === 'l' &&
      css`
        height: 22vw;
      `}
  }

  ${props =>
    props.hasPattern &&
    css`
      background-image: url(${pattern});
      background-size: 150%, auto, cover;
      background-blend-mode: multiply;
    `}

  ${props =>
    props.background &&
    css`
      background-color: ${getColor(props.background)};
    `}
`;

export default StyledBox;
