import styled, { css } from 'styled-components';

const StyledDefaultLayout = styled.main`
  section {
    display: flex;
    flex-wrap: wrap;

    ${props =>
      props.verticalHeader &&
      css`
        width: calc(100% - 59px);
        margin-left: 59px;
      `}
  }
`;

export default StyledDefaultLayout;
