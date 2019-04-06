import React from 'react';
import { graphql } from 'gatsby';

import DefaultTemplate from '../templates/default/default';

const EventPage = ({ data }) => {
  const { site, content } = data;
  const { frontmatter, html } = content;
  const { title, date } = frontmatter;

  return (
    <DefaultTemplate data={site}>
      <div className="blog-post">
        <h1>{title}</h1>
        <p>{date}</p>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
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
        date
      }
    }
  }
`;

export default EventPage;
