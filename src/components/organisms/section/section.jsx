import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools/index';

const StyledSection = styled.div`
  position: relative;
  width: 100%;
  background: #fff;

  ${mq('m')} {
    display: flex;
  }
`;

const Section = ({ children, ...props }) => <StyledSection {...props}>{children}</StyledSection>;

export default Section;
