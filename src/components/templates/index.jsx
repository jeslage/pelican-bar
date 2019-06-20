/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql, Link } from 'gatsby';

import Row from '../molecules/row/row';
import Box from '../atoms/box/box';
import Headline from '../atoms/headline/headline';
import CustomLink from '../atoms/link/link';
import Content from '../molecules/content/content';
import Section from '../organisms/section/section';
import Gallery from '../organisms/gallery/gallery';

import DefaultLayout from '../layouts/default/default';
import PatternProvider from '../context/PatternContext';

export const IndexPageTemplate = ({
  patternBackground,
  seo,
  globals,
  vibes,
  bar,
  contact,
  route,
  reservation,
  openingHours
}) => (
  <PatternProvider patternBackground={patternBackground}>
    <DefaultLayout seo={seo} globals={globals}>
      <Section>
        <Row headline="Bar">
          <Box hasPattern noTopBorder background="white" size="m" />
          <Headline>{bar.heroText}</Headline>
          <Box background="purple" size="m" />
          <Content headline={bar.headline} content={bar.description} />
          <Box hasPattern background="white" size="l" />
        </Row>

        <Row headline="Kontakt">
          <Box background="green" size="l" noTopBorder />
          <Content headline={openingHours.headline} content={openingHours.text} />
          <Box hasPattern background="white" size="l" />
          <Content headline={reservation.headline} content={reservation.text} />
          <Box background="salmon" size="l" />
          <Headline>{contact.heroText}</Headline>
          <Box background="white" size="m" hasPattern />
          <Content headline={route.headline} content={route.text}>
            {route.url && (
              <CustomLink href={route.url} target="_blank">
                Zur Route
              </CustomLink>
            )}
          </Content>
          <Box background="yellow" size="l" />
          <Content headline={contact.headline} content={contact.text} />
          <Box hasPattern background="white" size="l" />
        </Row>

        <Row headline="Vibes">
          <Box background="white" size="s" noTopBorder />
          <Gallery {...vibes} />
          <Content>
            <Link to="/impressum">Impressum</Link> / <Link to="/datenschutz">Datenschutz</Link>
          </Content>
          <Box hasPattern background="white" size="l" />
        </Row>
      </Section>
    </DefaultLayout>
  </PatternProvider>
);

const IndexPage = ({ data }) => {
  const {
    general,
    content,
    background: { edges }
  } = data;
  const { frontmatter } = content;

  return (
    <IndexPageTemplate
      patternBackground={edges[0].node}
      {...frontmatter}
      seo={general.frontmatter.seo}
      globals={general.frontmatter.globals}
    />
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    background: allFile(filter: { name: { eq: "pattern" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    general: markdownRemark(frontmatter: { type: { eq: "general" } }) {
      frontmatter {
        globals {
          title
        }
        seo {
          description
          keywords
          title
        }
      }
    }
    content: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        vibes {
          heroText
          gallery {
            childImageSharp {
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        contact {
          heroText
          headline
          text
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
          heroText
          headline
          description
        }
      }
    }
  }
`;

export default IndexPage;
