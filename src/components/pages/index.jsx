import React from 'react';
import { graphql, Link } from 'gatsby';

import queryEventEntries from '../../query/queryEventEntries';
import queryBlogEntries from '../../query/queryBlogEntries';

import DefaultTemplate from '../templates/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;
  const { frontmatter } = site;
  const { headline, subline } = frontmatter;

  const eventEntries = queryEventEntries();
  const blogEntries = queryBlogEntries();

  return (
    <DefaultTemplate siteData={site}>
      <div className="blog-post">
        <h1>{headline}</h1>
        <h2>{subline}</h2>

        <h4>BlogPosts</h4>
        {blogEntries.map(({ node }) => (
          <Link to={node.fields.slug} key={node.frontmatter.title}>
            {node.frontmatter.title}
          </Link>
        ))}

        <h4>Events</h4>
        {eventEntries.map(({ node }) => (
          <Link to={node.fields.slug} key={node.frontmatter.title}>
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
  }
`;

export default IndexPage;
