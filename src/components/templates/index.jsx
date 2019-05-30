import React from 'react';
import { graphql } from 'gatsby';

import Row from '../molecules/row/row';
import Box from '../atoms/box/box';
import Link from '../atoms/link/link';
import Content from '../molecules/content/content';
import Hero from '../organisms/hero/hero';
import Section from '../organisms/section/section';
import Gallery from '../organisms/gallery/gallery';

import DefaultLayout from '../layouts/default/default';

export const IndexPageTemplate = ({
  vibes,
  bar,
  contact,
  route,
  reservation,
  openingHours,
  hero
}) => {
  const verticalHeader = true;

  return (
    <DefaultLayout verticalHeader={verticalHeader}>
      {!verticalHeader && <Hero {...hero} />}
      <Section>
        <Row headline="Bar">
          <Box hasPattern noTopBorder />
          <Content content={bar.description} />
        </Row>

        <Row headline="Kontakt">
          <Box background="purple" size="l" noTopBorder />

          <Content headline={contact.headline} content={contact.text} />

          <Box hasPattern size="s" />

          <Content headline={route.headline} content={route.text} />

          <Box background="salmon" size="l" />

          <Content headline={reservation.headline} content={reservation.text}>
            {reservation.url && (
              <Link href={reservation.url} target="_blank">
                Tisch buchen!
              </Link>
            )}
          </Content>

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
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return <IndexPageTemplate {...frontmatter} />;
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        hero {
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          headline
        }
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
        contact {
          headline
          text
        }
        route {
          headline
          text
        }
        reservation {
          headline
          text
          url
        }
        bar {
          description
        }
      }
    }
  }
`;

export default IndexPage;
