import styled, { css } from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  height: 70px;
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

  .header__logo {
    flex-grow: 2;
    display: flex;
    align-items: center;
  }

  .header__signet {
    display: flex;
    align-items: center;
    text-align: right;
  }

  svg {
    height: 50px;
  }

  ${props =>
    props.isVertical &&
    css`
      padding: 0;
      border-right: 5px solid black;
      width: 100vh;
      left: -100vh;
      transform: rotate(-90deg);
      transform-origin: top right;

      .header__logo {
        padding: 0 10px;
      }

      .header__signet {
        padding: 0 7px;
        border-left: 5px solid black;

        svg {
          transform: rotate(90deg);
          transform-origin: center;
        }
      }
    `}
`;

export default StyledHeader;
