import React from 'react';
import { graphql } from 'gatsby';

import Row from '../molecules/row/row';
import Box from '../atoms/box/box';
import Link from '../atoms/link/link';
import Hero from '../organisms/hero/hero';
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

      <Row headline="Bar">
        <Box hasPattern noTopBorder />
        <div className="content">
          <p className="content__headline">{bar.headline}</p>

          {bar.description.split('## SPACER ##').map(text => (
            <>
              <p dangerouslySetInnerHTML={{ __html: text.replace('\n', '</br>') }} />
              <Box size="s" />
            </>
          ))}
        </div>
      </Row>

      <Row headline="Kontakt">
        <Box background="purple" size="l" noTopBorder />

        <div className="content">
          <p className="content__headline">{contact.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: contact.text.replace('\n', '</br>') }} />
        </div>

        <Box hasPattern size="s" />

        <div className="content">
          <p className="content__headline">{route.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: route.text.replace('\n', '</br>') }} />
        </div>

        <Box background="salmon" size="l" />

        <div className="content">
          <p className="content__headline">{reservation.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: reservation.text.replace('\n', '</br>') }} />
          {reservation.url && (
            <Link href={reservation.url} target="_blank">
              Tisch buchen!
            </Link>
          )}
        </div>

        <Box hasPattern size="s" />

        <div className="content">
          <p className="content__headline">{openingHours.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: openingHours.text.replace('\n', '</br>') }} />
        </div>
      </Row>

      <Row headline="Vibes">
        <Box background="green" size="s" noTopBorder />

        <Gallery {...vibes} />
      </Row>
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
