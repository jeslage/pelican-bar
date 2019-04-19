import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import Box from '../atoms/box/box';

import DefaultLayout from '../layouts/default/default';

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'divider-box': Box }
}).Compiler;

const StaticPage = ({ data }) => {
  const { content } = data;
  const { frontmatter, htmlAst } = content;
  const { headline } = frontmatter;

  return (
    <DefaultLayout verticalHeader>
      <h1>{headline}</h1>

      {renderAst(htmlAst)}
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    content: markdownRemark(fields: { slug: { eq: $path } }) {
      htmlAst
      frontmatter {
        headline
      }
    }
  }
`;

export default StaticPage;
