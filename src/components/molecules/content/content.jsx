import React from 'react';
import styled from 'styled-components';

import Box from '../../atoms/box/box';

const StyledContent = styled.div`
  background: #fff;

  p {
    padding: 30px;
    font-size: 20px;
  }

  .content__headline {
    padding: 30px 30px 10px;
    margin-bottom: 20px;
  }
`;

const Content = ({ children, content, headline }) => {
  const splittedContent = content.split('<Box>');

  return (
    <StyledContent>
      {headline && <p className="content__headline">{headline}</p>}
      {splittedContent.map((text, index) => (
        <>
          {index > 0 && index !== splittedContent.length && <Box size="s" />}
          <p dangerouslySetInnerHTML={{ __html: text.replace('\n', '</br>') }} />
        </>
      ))}
      {children}
    </StyledContent>
  );
};

export default Content;
