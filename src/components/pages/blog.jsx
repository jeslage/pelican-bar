import React from 'react';
import { graphql } from 'gatsby';

import DefaultTemplate from '../templates/default/default';

const BlogPage = ({ data }) => {
  const { content, site } = data;
  const { frontmatter, html } = content;
  const { title } = frontmatter;

  return (
    <DefaultTemplate siteData={site}>
      <h1>{title}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DefaultTemplate>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(frontmatter: { type: { eq: "index" } }) {
      html
      frontmatter {
        title
        headline
        subline
      }
    }
    content: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPage;
