import styled, { css } from 'styled-components';
import { mq, getColor } from '../../../stylesheets/tools/index';

const StyledBox = styled.div`
  width: 100%;
  border-top: ${props => (!props.noTopBorder ? '8px solid #000' : '')};
  border-bottom: ${props => (!props.noBottomBorder ? '8px solid #000' : '')};
  height: 0;
  position: relative;
  overflow: hidden;

  picture {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;

    ${mq('m')} {
      top: -50%;
      left: -50%;
      height: 200%;
      width: 200%;
    }
  }

  ${props =>
    props.size === 'xs' &&
    css`
      padding-bottom: calc(1 / 8 * 100%);

      .gatsby-image-wrapper > div {
        padding-bottom: calc(1 / 8 * 100%) !important;
      }
    `}

  ${props =>
    props.size === 's' &&
    css`
      padding-bottom: calc(1 / 4 * 100%);

      .gatsby-image-wrapper > div {
        padding-bottom: calc(1 / 4 * 100%) !important;
      }
    `}

  ${props =>
    props.size === 'm' &&
    css`
      padding-bottom: calc(1 / 2 * 100%);

      .gatsby-image-wrapper > div {
        padding-bottom: calc(1 / 2 * 100%) !important;
      }
    `}
  
  ${props =>
    props.size === 'l' &&
    css`
      padding-bottom: calc(3 / 4 * 100%);

      .gatsby-image-wrapper > div {
        padding-bottom: calc(3 / 4 * 100%) !important;
      }
    `}

  ${props =>
    props.background &&
    css`
      background-color: ${getColor(props.background)};
    `}
`;

export default StyledBox;
