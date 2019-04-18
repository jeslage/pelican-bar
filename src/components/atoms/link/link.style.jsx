import styled from 'styled-components';
import { getColor } from '../../../stylesheets/tools/index';

const StyledLink = styled.a`
  background-color: ${getColor('black')};
  color: ${getColor('white')};
  padding: 5px;
  display: block;
`;

export default StyledLink;
