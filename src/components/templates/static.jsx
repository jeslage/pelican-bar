import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DefaultLayout from '../layouts/default/default';
import Box from '../atoms/box/box';

const StyledStaticPage = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;
`;

export const StaticPageTemplate = ({ html, headline }) => {
  return (
    <DefaultLayout>
      <Box size="s" noTopBorder />
      <StyledStaticPage>
        <h1>{headline}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledStaticPage>
      <Box size="l" noBottomBorder />
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
