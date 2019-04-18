import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-bottom: 5px solid black;
  padding: 0px 10px;
  display: flex;

  a {
    display: block;
  }

  .header__signet {
    flex-grow: 2;
    text-align: right;
  }

  svg {
    height: 50px;
  }

  ${props =>
    props.isVertical &&
    css`
      border-right: 5px solid black;
      width: 100vh;
      left: -100vh;
      transform: rotate(-90deg);
      transform-origin: top right;

      .header__signet svg {
        transform: rotate(90deg);
        transform-origin: center;
      }
    `}
`;

export default StyledHeader;
