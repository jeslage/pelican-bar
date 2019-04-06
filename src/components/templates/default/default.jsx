import React from 'react';
import { Helmet } from 'react-helmet';

import querySeoData from '../../../query/querySeoData';

import GlobalStyle from '../../../stylesheets/global';

import Header from '../../organisms/header/header';
import Footer from '../../organisms/footer/footer';

const DefaultTemplate = ({ siteData, children }) => {
  const {
    frontmatter: { title }
  } = siteData;

  const { seoTitle, seoDescription, seoKeywords } = querySeoData();

  return (
    <main>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
      </Helmet>
      <GlobalStyle />

      <Header title={title} />

      <section>{children}</section>

      <Footer />
    </main>
  );
};

export const pageQuery = graphql`
  query {
    opentable: allFile(filter: { name: { eq: "opentable" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

export default DefaultTemplate;
