import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import RowMolecule from '../molecules/row/row';
import BoxAtom from '../atoms/box/box';
import LinkAtom from '../atoms/link/link';
import HeroOrganism from '../organisms/hero/hero';

import DefaultLayout from '../layouts/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;
  const { frontmatter } = site;
  const { contact, bar, hero } = frontmatter;

  const verticalHeader = true;

  return (
    <DefaultLayout verticalHeader={verticalHeader}>
      {!verticalHeader && <HeroOrganism {...hero} />}
      <RowMolecule headline="Vibes">
        <BoxAtom background="green" size="s" noTopBorder />
        <div className="content">
          <ReactMarkdown source={bar.description} />
        </div>
        <BoxAtom background="purple" size="s" />
      </RowMolecule>
      <RowMolecule headline="Bar">
        <BoxAtom hasPattern noTopBorder />
        <div className="content">
          <ReactMarkdown source={bar.description} />
        </div>
      </RowMolecule>
      <RowMolecule headline="Kontakt">
        <BoxAtom background="purple" size="l" noTopBorder />

        <div className="content">
          <ReactMarkdown source={contact.openingHours} />
        </div>

        <BoxAtom hasPattern size="s" />

        <div className="content">
          <ReactMarkdown source={contact.route} />
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
          <ReactMarkdown source={contact.contact} />
        </div>
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
              fluid(maxWidth: 1440) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          headline
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
