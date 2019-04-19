import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import RowMolecule from '../molecules/row/row';
import BoxAtom from '../atoms/box/box';
import LinkAtom from '../atoms/link/link';
import HeroOrganism from '../organisms/hero/hero';
import GalleryOrganism from '../organisms/gallery/gallery';

import DefaultLayout from '../layouts/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;
  const { frontmatter } = site;
  const { vibes, contact, bar, hero } = frontmatter;
  console.log(contact);
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
          <p dangerouslySetInnerHTML={{ __html: contact.openingHours.replace('\n', '</br>') }} />
        </div>

        <BoxAtom hasPattern size="s" />

        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: contact.route.replace('\n', '</br>') }} />
        </div>

        <BoxAtom background="salmon" size="l" />

        <div className="content">
          <LinkAtom
            href="https://www.opentable.de/r/werft-craft-cuisine-and-cocktails-im-innside-by-melia-hamburg-reservations-hamburg?restref=138102&lang=de-DE"
            target="_blank"
          >
            Tisch buchen!
          </LinkAtom>
        </div>

        <BoxAtom hasPattern size="s" />

        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: contact.contact.replace('\n', '</br>') }} />
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
