import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { TypoCopy } from '../../../stylesheets/tools/typo';

import Box from '../../atoms/box/box';

const StyledContent = styled.div`
  background: #fff;
  ${TypoCopy}

  p, .content__wrapper {
    padding: 30px;
  }

  .content__headline {
    padding: 30px 30px 10px;
    margin-bottom: 20px;
  }
`;

const Content = ({ children, content, headline }) => {
  const splittedContent = content ? content.split('<Box>') : null;

  return (
    <StyledContent>
      {headline && <p className="content__headline">{headline}</p>}
      {splittedContent &&
        splittedContent.map((text, index) => (
          <>
            {index > 0 && index !== splittedContent.length && <Box size="s" />}
            <p dangerouslySetInnerHTML={{ __html: text.replace('\n', '</br>') }} />
          </>
        ))}

      {children && <div className="content__wrapper">{children}</div>}
    </StyledContent>
  );
};

Content.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  headline: PropTypes.string
};

Content.defaultProps = {
  children: null,
  content: null,
  headline: null
};

export default Content;
