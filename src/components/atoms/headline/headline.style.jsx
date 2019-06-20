import styled from 'styled-components';

import { TypoHero } from '../../../stylesheets/tools/typo';
import { mq, px2rem } from '../../../stylesheets/tools';

const StyledHeadline = styled.h2`
  ${TypoHero}
  hyphens: auto;
  margin: 0;
  padding: ${px2rem(20)};

  ${mq('m')} {
    padding: ${px2rem(30)};
  }
`;

export default StyledHeadline;
