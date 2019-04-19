import React from 'react';
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/default/default';

export const StaticPageTemplate = ({ html, headline }) => {
  return (
    <DefaultLayout verticalHeader>
      <h1>{headline}</h1>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </DefaultLayout>
  );
};

const StaticPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return <StaticPageTemplate html={html} {...frontmatter} />;
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        headline
      }
    }
  }
`;

export default StaticPage;
