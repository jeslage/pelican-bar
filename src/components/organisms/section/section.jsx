import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools/index';

const StyledSection = styled.div`
  position: relative;
  width: 100%;

  ${mq('m')} {
    display: flex;
  }
`;

const Section = ({ children }) => <StyledSection>{children}</StyledSection>;

export default Section;
