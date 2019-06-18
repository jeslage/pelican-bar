import { px2rem, mq } from './utility';

export const TypoHero = `
  font-family: 'Pelican Sans', sans-serif;
  font-size: ${px2rem(60)};
  line-height: ${px2rem(80)};
  font-weight: normal;

  ${mq('m')} {
    font-size: ${px2rem(95)};
    line-height: ${px2rem(110)};
  }
`;

export const TypoCopy = `
  font-family: 'Lemur Medium', sans-serif;
  font-weight: normal;
  font-size: ${px2rem(24)};
  line-height: ${px2rem(35)};

  ${mq('m')} {
    font-size: ${px2rem(35)};
    line-height: ${px2rem(50)};
  }
`;
