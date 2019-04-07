import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import DefaultLayout from '../layouts/default/default';

const EventPage = ({ data }) => {
  const { content } = data;
  const { frontmatter, html } = content;
  const { title, date, image } = frontmatter;

  return (
    <DefaultLayout>
      <h1>{title}</h1>
      <p>{date}</p>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      {image && (
        <div style={{ maxWidth: '700px', backgroundColor: 'lightgray' }}>
          <Img fluid={image.childImageSharp.fluid} />
        </div>
      )}
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
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

export default EventPage;
