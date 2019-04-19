import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import DefaultLayout from '../layouts/default/default';

const EventPage = ({ data }) => {
  const { content } = data;
  const { frontmatter, html } = content;
  const { title, date } = frontmatter;

  return (
    <DefaultLayout>
      <h1>{title}</h1>
      <p>{date}</p>

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
        date
      }
    }
  }
`;

export default EventPage;
