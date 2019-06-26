import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { mq, px2rem } from '../../../stylesheets/tools';
import { TypoCopy } from '../../../stylesheets/tools/typo';

import Box from '../../atoms/box/box';

const StyledContent = styled.div`
  background: #fff;
  border-bottom: ${props => (props.hasBottomBorder ? '8px solid #000' : 'none')};
  ${TypoCopy}

  p,
  .content__wrapper {
    padding: ${px2rem(20)};

    ${mq('m')} {
      padding: ${px2rem(30)};
    }
  }

  p > a {
    border-bottom: 4px solid #000;

    &:hover {
      border-color: transparent;
    }
  }

  .content__headline {
    padding: ${px2rem(20)} ${px2rem(20)} ${px2rem(10)};
    margin-bottom: 20px;

    ${mq('m')} {
      padding: ${px2rem(30)} ${px2rem(30)} ${px2rem(10)};
    }
  }
`;

const Content = ({ children, content, headline, hasBottomBorder }) => {
  const splittedContent = content ? content.split('<Box>') : null;

  return (
    <StyledContent hasBottomBorder={hasBottomBorder}>
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
  headline: PropTypes.string,
  hasBottomBorder: PropTypes.bool
};

Content.defaultProps = {
  children: null,
  content: null,
  headline: null,
  hasBottomBorder: false
};

export default Content;
