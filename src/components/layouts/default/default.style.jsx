import styled, { css } from 'styled-components';
import pattern from '../../../images/pattern.png';

const StyledDefaultLayout = styled.main`
  background-image: url(${pattern});
  background-size: 100%, auto, cover;
  background-blend-mode: multiply;
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
