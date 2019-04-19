import styled, { css } from 'styled-components';

const StyledDefaultLayout = styled.main`
  section {
    display: flex;
    flex-wrap: wrap;

    ${props =>
      props.verticalHeader &&
      css`
        width: calc(100% - 70px);
        margin-left: 70px;
      `}
  }
`;

export default StyledDefaultLayout;
