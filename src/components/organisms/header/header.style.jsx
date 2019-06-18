import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  height: 70px;
  top: 0;
  background: #fff;
  z-index: 1;
  border-bottom: 8px solid black;
  display: flex;
  padding: 0;
  width: 100vh;
  left: -100vh;
  transform: rotate(-90deg);
  transform-origin: top right;

  a {
    display: block;
  }

  .header__logo {
    flex-grow: 2;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }

  .header__signet {
    display: flex;
    align-items: center;
    text-align: right;
    padding: 0 10px;
  }

  svg {
    transform: rotate(90deg);
    transform-origin: center;
    height: 50px;
  }
`;

export default StyledHeader;
