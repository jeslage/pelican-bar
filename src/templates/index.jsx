import React from 'react';
import { graphql, Link } from 'gatsby';

import styled from 'styled-components';
import SiteWrapper from '../wrapper/siteWrapper';

const Container = styled.div`
  background: #f4f4f4;
`;

const IndexPage = ({ data }) => {
  const { site, blogEntries, eventEntries } = data;
  const { frontmatter } = site;

  const { headline, subline } = frontmatter;

  return (
    <SiteWrapper data={site}>
      <Container className="blog-post">
        <h1>{headline}</h1>
        <h1>{subline}</h1>
        <h2>BlogPosts</h2>
        {blogEntries.edges.map(({ node }) => (
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        ))}
        <h2>Events</h2>
        {eventEntries.edges.map(({ node }) => (
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        ))}
      </Container>
    </SiteWrapper>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        headline
        subline
      }
    }
    blogEntries: allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }, limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    eventEntries: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "event" } } }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
