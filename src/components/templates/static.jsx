import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import DefaultLayout from '../layouts/default/default';
import Box from '../atoms/box/box';
import { TypoCopySmall } from '../../stylesheets/tools/typo';
import PatternProvider from '../context/PatternContext';

const StyledStaticPage = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 80px 20px;

  p {
    ${TypoCopySmall}
    margin: 20px 0;
  }
`;

export const StaticPageTemplate = ({
  patternBackground,
  seo,
  globals,
  content,
  htmlContent,
  headline
}) => {
  return (
    <PatternProvider patternBackground={patternBackground}>
      <DefaultLayout seo={seo} globals={globals}>
        <Box size="xs" noTopBorder />
        <StyledStaticPage>
          <h1>{headline}</h1>
          {htmlContent ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <div>{content}</div>
          )}
        </StyledStaticPage>
        <Box size="xs" noBottomBorder />
      </DefaultLayout>
    </PatternProvider>
  );
};

const StaticPage = ({ data }) => {
  const {
    general: {
      frontmatter: { seo, globals }
    },
    background,
    content
  } = data;
  const { frontmatter, html } = content;
  return (
    <StaticPageTemplate
      content={html}
      htmlContent
      {...frontmatter}
      seo={seo}
      globals={globals}
      patternBackground={background}
    />
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    background: allFile(filter: { name: { eq: "pattern" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    general: markdownRemark(frontmatter: { type: { eq: "general" } }) {
      frontmatter {
        globals {
          title
        }
        seo {
          description
          keywords
          title
        }
      }
    }
    content: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        headline
      }
    }
  }
`;

export default StaticPage;
