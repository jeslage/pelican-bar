import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Row from '../molecules/row/row';
import Box from '../atoms/box/box';
import Hero from '../organisms/hero/hero';

import DefaultLayout from '../layouts/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;
  const { frontmatter } = site;
  const { contact, bar, hero } = frontmatter;

  return (
    <DefaultLayout>
      <Hero image={hero.image} />
      <Row headline="Vibes">
        <Box noTopBorder />

        <Box background="purple" size="s" />
      </Row>
      <Row headline="Bar">
        <Box background="salmon" noTopBorder />
        <div className="content">
          <ReactMarkdown source={bar.description} />
        </div>
      </Row>
      <Row headline="Kontakt">
        <div className="content">
          <ReactMarkdown source={contact.openingHours} />
        </div>
        <div className="content">
          <ReactMarkdown source={contact.route} />
        </div>
        <div className="content">
          <ReactMarkdown source={contact.contact} />
        </div>
      </Row>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          text
        }
        contact {
          contact
          openingHours
          route
        }
        bar {
          description
        }
      }
    }
  }
`;

export default IndexPage;
