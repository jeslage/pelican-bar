import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
  border-bottom: 5px solid black;
  padding: 0px 20px;
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
`;

export default StyledHeader;
