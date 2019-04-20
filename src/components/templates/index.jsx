import React from 'react';
import { graphql } from 'gatsby';

import RowMolecule from '../molecules/row/row';
import BoxAtom from '../atoms/box/box';
import LinkAtom from '../atoms/link/link';
import HeroOrganism from '../organisms/hero/hero';
import GalleryOrganism from '../organisms/gallery/gallery';

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
      {!verticalHeader && <HeroOrganism {...hero} />}

      <RowMolecule headline="Bar">
        <BoxAtom hasPattern noTopBorder />
        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: bar.description.replace('\n', '</br>') }} />
        </div>
      </RowMolecule>

      <RowMolecule headline="Kontakt">
        <BoxAtom background="purple" size="l" noTopBorder />

        <div className="content">
          <p className="content__headline">{contact.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: contact.text.replace('\n', '</br>') }} />
        </div>

        <BoxAtom hasPattern size="s" />

        <div className="content">
          <p className="content__headline">{route.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: route.text.replace('\n', '</br>') }} />
        </div>

        <BoxAtom background="salmon" size="l" />

        <div className="content">
          <p className="content__headline">{reservation.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: reservation.text.replace('\n', '</br>') }} />
          {reservation.url && (
            <LinkAtom href={reservation.url} target="_blank">
              Tisch buchen!
            </LinkAtom>
          )}
        </div>

        <BoxAtom hasPattern size="s" />

        <div className="content">
          <p className="content__headline">{openingHours.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: openingHours.text.replace('\n', '</br>') }} />
        </div>
      </RowMolecule>

      <RowMolecule headline="Vibes">
        <BoxAtom background="green" size="s" noTopBorder />

        <GalleryOrganism {...vibes} />
      </RowMolecule>
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
