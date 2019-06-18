import React from 'react';
import { graphql } from 'gatsby';

import Row from '../molecules/row/row';
import Box from '../atoms/box/box';
import Link from '../atoms/link/link';
import Content from '../molecules/content/content';
import Section from '../organisms/section/section';
import Gallery from '../organisms/gallery/gallery';

import DefaultLayout from '../layouts/default/default';

export const IndexPageTemplate = ({ vibes, bar, route, reservation, openingHours }) => (
  <DefaultLayout>
    <Section>
      <Row headline="Bar">
        <Box hasPattern noTopBorder background="white" size="m" />
        <Content headline={bar.headline} content={bar.description} />
      </Row>

      <Row headline="Kontakt">
        <Box background="purple" size="l" noTopBorder />

        <Content headline={route.headline} content={route.text}>
          {route.url && (
            <Link href={route.url} target="_blank">
              Zur Route
            </Link>
          )}
        </Content>

        <Box background="salmon" size="l" />

        <Content headline={reservation.headline} content={reservation.text} />

        <Box hasPattern size="s" />

        <Content headline={openingHours.headline} content={openingHours.text} />
      </Row>

      <Row headline="Vibes">
        <Box background="green" size="s" noTopBorder />

        <Gallery {...vibes} />
      </Row>
    </Section>
  </DefaultLayout>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <IndexPageTemplate {...frontmatter} />;
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        vibes {
          gallery {
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        openingHours {
          headline
          text
        }
        route {
          headline
          text
          url
        }
        reservation {
          headline
          text
        }
        bar {
          description
        }
      }
    }
  }
`;

export default IndexPage;
