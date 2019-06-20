import styled, { css } from 'styled-components';
import { getColor } from '../../../stylesheets/tools/index';
import pattern from '../../../images/pattern.png';

const StyledBox = styled.div`
  width: 100%;
  border-top: ${props => (!props.noTopBorder ? '8px solid #000' : '')};
  border-bottom: ${props => (!props.noBottomBorder ? '8px solid #000' : '')};
  height: 0;
  position: relative;

  ${props =>
    props.hasPattern &&
    css`
      background-image: url(${pattern});
      background-size: 250%, auto, cover;
      background-blend-mode: multiply;
    `}

  ${props =>
    props.size === 's' &&
    css`
      padding-bottom: calc(1 / 4 * 100%);
    `}

  ${props =>
    props.size === 'm' &&
    css`
      padding-bottom: calc(1 / 2 * 100%);
    `}
  
  ${props =>
    props.size === 'l' &&
    css`
      padding-bottom: calc(3 / 4 * 100%);
    `}

  ${props =>
    props.background &&
    css`
      background-color: ${getColor(props.background)};
    `}
`;

export default StyledBox;
