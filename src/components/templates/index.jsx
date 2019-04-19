import React from 'react';
import { graphql } from 'gatsby';

import RowMolecule from '../molecules/row/row';
import BoxAtom from '../atoms/box/box';
import LinkAtom from '../atoms/link/link';
import HeroOrganism from '../organisms/hero/hero';
import GalleryOrganism from '../organisms/gallery/gallery';

import DefaultLayout from '../layouts/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;
  const { frontmatter } = site;
  const { vibes, bar, contact, route, reservation, openingHours, hero } = frontmatter;

  const verticalHeader = true;

  return (
    <DefaultLayout verticalHeader={verticalHeader}>
      {!verticalHeader && <HeroOrganism {...hero} />}

      <RowMolecule headline="Bar">
        <BoxAtom pattern noTopBorder />
        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: bar.description.replace('\n', '</br>') }} />
        </div>
      </RowMolecule>

      <RowMolecule headline="Kontakt">
        <BoxAtom background="purple" size="l" noTopBorder />

        <div className="content">
          <p>{contact.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: contact.text.replace('\n', '</br>') }} />
        </div>

        <BoxAtom pattern size="s" />

        <div className="content">
          <p>{route.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: route.text.replace('\n', '</br>') }} />
        </div>

        <BoxAtom background="salmon" size="l" />

        <div className="content">
          <p>{reservation.headline}</p>
          <p dangerouslySetInnerHTML={{ __html: reservation.text.replace('\n', '</br>') }} />
          {reservation.url && (
            <LinkAtom href={reservation.url} target="_blank">
              Tisch buchen!
            </LinkAtom>
          )}
        </div>

        <BoxAtom pattern size="s" />

        <div className="content">
          <p>{openingHours.headline}</p>
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

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(fields: { slug: { eq: $path } }) {
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
