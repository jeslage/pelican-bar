import styled from 'styled-components';
import { getColor } from '../../../stylesheets/tools/index';
import { TypoCopy } from '../../../stylesheets/tools/typo';

const StyledLink = styled.a`
  ${TypoCopy}
  background-color: ${getColor('black')};
  color: ${getColor('white')};
  border: 8px solid ${getColor('black')};
  padding: 10px 20px;
  text-align: center;
  display: block;

  &:hover {
    color: ${getColor('black')};
    background-color: ${getColor('white')};
  }
`;

export default StyledLink;
