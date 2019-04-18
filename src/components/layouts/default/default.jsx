import React from 'react';
import { Helmet } from 'react-helmet';

import queryGeneralData from '../../../query/queryGeneralData';

import GlobalStyle from '../../../stylesheets/global';

import StyledDefaultLayout from './default.style';
import Header from '../../organisms/header/header';

const DefaultLayout = ({ verticalHeader, children }) => {
  const { globals, seo } = queryGeneralData();

  return (
    <StyledDefaultLayout verticalHeader={verticalHeader}>
      <main>
        <Helmet>
          <html lang="de" />
          <title>{globals.title}</title>
          {seo.title && <meta name="title" content={seo.title} />}
          {seo.description && <meta name="description" content={seo.description} />}
          {seo.keywords && <meta name="keywords" content={seo.keywords} />}
        </Helmet>
        <GlobalStyle />
        <Header title={globals.title} isVertical={verticalHeader} />
        <section>{children}</section>
      </main>
    </StyledDefaultLayout>
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

export default DefaultLayout;
