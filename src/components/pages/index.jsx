import React from 'react';
import { graphql, Link } from 'gatsby';

import DefaultTemplate from '../templates/default/default';

const IndexPage = ({ data }) => {
  const { site, blogEntries, eventEntries } = data;
  const { frontmatter } = site;

  const { headline, subline } = frontmatter;

  return (
    <DefaultTemplate data={site}>
      <div className="blog-post">
        <h1>{headline}</h1>
        <h2>{subline}</h2>
        <h3>BlogPosts</h3>
        {blogEntries.edges.map(({ node }) => (
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        ))}
        <h3>Events</h3>
        {eventEntries.edges.map(({ node }) => (
          <Link to={node.fields.slug}>
            <time>{node.frontmatter.date}</time>
            <p>{node.frontmatter.title}</p>
          </Link>
        ))}
      </div>
    </DefaultTemplate>
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
            date
          }
        }
      }
    }
  }
`;

export default IndexPage;
