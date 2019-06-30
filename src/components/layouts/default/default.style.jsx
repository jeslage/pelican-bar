import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools';

const StyledDefaultLayout = styled.main`
  section {
    display: flex;
    flex-wrap: wrap;

    width: calc(100% - 55px);
    margin-left: 55px;

    ${mq('m')} {
      width: calc(100% - 70px);
      margin-left: 70px;
    }
  }
`;

export default StyledDefaultLayout;
