import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const SiteWrapper = ({ data, children }) => {
  const { frontmatter } = data;

  const { title } = frontmatter;

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      <header>
        <h1>
          <Link to="/">{title}</Link>
        </h1>
        <a
          href="https://www.opentable.com/r/la-casa-di-lucia-reservations-philadelphia?restref=412810&lang=en-US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservieren
        </a>
      </header>
      {children}
    </div>
  );
};

export default SiteWrapper;
