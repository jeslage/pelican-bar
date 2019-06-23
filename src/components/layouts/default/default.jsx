import React from 'react';
import { Helmet } from 'react-helmet';

import GlobalStyle from '../../../stylesheets/global';

import StyledDefaultLayout from './default.style';
import Header from '../../organisms/header/header';

const DefaultLayout = ({ children, seo, globals }) => (
  <StyledDefaultLayout>
    <main>
      <Helmet>
        <html lang="de" />
        <title>{globals ? globals.title : 'Pelican Bar'}</title>
        {seo && seo.title && <meta name="title" content={seo.title} />}
        {seo && seo.description && <meta name="description" content={seo.description} />}
        {seo && seo.keywords && <meta name="keywords" content={seo.keywords} />}
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
      </Helmet>
      <GlobalStyle />
      <Header title={globals ? globals.title : 'Pelican Bar'} />
      <section>{children}</section>
    </main>
  </StyledDefaultLayout>
);

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
