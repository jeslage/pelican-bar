import styled, { css } from 'styled-components';
import { mq, getColor } from '../../../stylesheets/tools/index';
import pattern from '../../../images/pattern.png';

const StyledBox = styled.div`
  width: 100%;
  height: calc(33.333vw - 30px);
  background-color: ${getColor('white')};
  border-top: ${props => (!props.noTopBorder ? '8px solid #000' : '')};
  border-bottom: 8px solid #000;

  ${mq('m')} {
    ${props =>
      props.size === 's' &&
      css`
        height: calc(10vw - 30px);
      `}

    ${props =>
      props.size === 'm' &&
      css`
        height: calc(15vw - 30px);
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
    props.hasPattern &&
    css`
      background-image: url(${pattern});
      background-size: 200%, auto, cover;
      background-blend-mode: multiply;
    `}

  ${props =>
    props.background &&
    css`
      background-color: ${getColor(props.background)};
    `}
`;

export default StyledBox;
