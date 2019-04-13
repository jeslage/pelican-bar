import React from 'react';
import { graphql, Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

import queryEventEntries from '../../query/queryEventEntries';
import queryBlogEntries from '../../query/queryBlogEntries';

import Row from '../molecules/row/row';
import Box from '../atoms/box/box';
import Hero from '../organisms/hero/hero';

import DefaultLayout from '../layouts/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;
  const { frontmatter } = site;
  const { contact, bar, hero } = frontmatter;

  const eventEntries = queryEventEntries();
  const blogEntries = queryBlogEntries();

  return (
    <DefaultLayout>
      <Hero image={hero.image} />
      <Row headline="Vibes">
        <Box noTopBorder />

        <div className="content">
          {blogEntries.map(({ slug, title }) => (
            <Link to={slug} key={title}>
              {title}
            </Link>
          ))}
        </div>
        <Box background="purple" size="s" />
      </Row>
      <Row headline="Bar">
        <Box background="salmon" noTopBorder />
        <div className="content">
          <ReactMarkdown source={bar.description} />

          {blogEntries.map(({ slug, title }) => (
            <Link to={slug} key={title}>
              {title}
            </Link>
          ))}
        </div>
      </Row>
      <Row headline="Kontakt">
        <div className="content">
          <ReactMarkdown source={contact.openingHours} />
        </div>
        <div className="content">
          <ReactMarkdown source={contact.route} />
        </div>
        <div className="content">
          <ReactMarkdown source={contact.contact} />
        </div>
        <div className="content">
          <h4>Events</h4>

          {eventEntries.map(({ slug, title, date }) => (
            <Link to={slug} key={title}>
              <time>{date}</time>
              <p>{title}</p>
            </Link>
          ))}
        </div>
      </Row>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        hero {
          image
          text
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
