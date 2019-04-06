import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../../organisms/header/header';
import Footer from '../../organisms/footer/footer';

const DefaultTemplate = ({ data, children }) => {
  const {
    frontmatter: { title }
  } = data;

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <Header title={title} />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultTemplate;
