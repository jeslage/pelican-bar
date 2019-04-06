import React from 'react';
import { Helmet } from 'react-helmet';
import StyledTemplate from './default.style';

import queryGeneralData from '../../../query/queryGeneralData';

import GlobalStyle from '../../../stylesheets/global';

import Header from '../../organisms/header/header';
import Footer from '../../organisms/footer/footer';

const DefaultTemplate = ({ siteData, children }) => {
  const {
    frontmatter: { title }
  } = siteData;

  const { seo } = queryGeneralData();

  return (
    <StyledTemplate>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
      <GlobalStyle />

      <Header title={title} />

      <section>{children}</section>

      <Footer />
    </StyledTemplate>
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
