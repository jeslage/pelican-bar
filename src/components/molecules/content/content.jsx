import React from 'react';
import styled from 'styled-components';
import { mq } from '../../../stylesheets/tools/index';

const StyledContent = styled.div`
  padding: 30px;
  background: #fff;

  p {
    font-size: 20px;
  }

  .content__headline  {
    margin-bottom: 20px;
  }
`;

const Content = ({ children, content, headline }) => (
  <StyledContent>
    {headline && <p className="content__headline">{headline}</p>}
    <p dangerouslySetInnerHTML={{ __html: content.replace('\n', '</br>') }} />
    {children}
  </StyledContent>
);

export default Content;
