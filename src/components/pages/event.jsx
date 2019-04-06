import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import DefaultTemplate from '../templates/default/default';

const EventPage = ({ data }) => {
  const { site, content } = data;
  const { frontmatter, html } = content;
  const { title, date, image } = frontmatter;

  return (
    <DefaultTemplate data={site}>
      <div className="blog-post">
        <h1>{title}</h1>
        <p>{date}</p>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        {image && <Img fluid={image.childImageSharp.fluid} />}
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
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              src
            }
          }
        }
      }
    }
  }
`;

export default EventPage;
