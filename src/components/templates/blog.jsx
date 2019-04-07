import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default/default';

const BlogPage = ({ data }) => {
  const { content } = data;
  const { frontmatter, html } = content;
  const { title } = frontmatter;

  return (
    <DefaultLayout>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    content: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPage;
