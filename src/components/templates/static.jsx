import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default/default';

const StaticPage = ({ data }) => {
  const { content } = data;
  const { frontmatter, html } = content;
  const { headline } = frontmatter;

  return (
    <DefaultLayout verticalHeader>
      <h1>{headline}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    content: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        headline
      }
    }
  }
`;

export default StaticPage;
