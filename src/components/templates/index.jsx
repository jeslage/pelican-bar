import React from 'react';
import { graphql, Link } from 'gatsby';

import queryEventEntries from '../../query/queryEventEntries';
import queryBlogEntries from '../../query/queryBlogEntries';

import DefaultLayout from '../layouts/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;
  const { frontmatter } = site;
  const { headline, subline } = frontmatter;

  const eventEntries = queryEventEntries();
  const blogEntries = queryBlogEntries();

  return (
    <DefaultLayout>
      <h1>{headline}</h1>
      <h2>{subline}</h2>

      <h4>BlogPosts</h4>
      {blogEntries.map(({ slug, title }) => (
        <Link to={slug} key={title}>
          {title}
        </Link>
      ))}

      <h4>Events</h4>
      {eventEntries.map(({ slug, title, date }) => (
        <Link to={slug} key={title}>
          <time>{date}</time>
          <p>{title}</p>
        </Link>
      ))}
    </DefaultLayout>
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
