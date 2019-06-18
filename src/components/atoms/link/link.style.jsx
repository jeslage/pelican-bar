import styled from 'styled-components';
import { getColor } from '../../../stylesheets/tools/index';

const StyledLink = styled.a`
  background-color: ${getColor('black')};
  color: ${getColor('white')};
  border: none;
  padding: 20px;
  text-align: center;
  display: block;
  margin: 20px 30px 30px;
`;

export default StyledLink;
