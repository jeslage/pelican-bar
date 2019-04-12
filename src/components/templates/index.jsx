import React from 'react';
import { graphql, Link } from 'gatsby';

import queryEventEntries from '../../query/queryEventEntries';
import queryBlogEntries from '../../query/queryBlogEntries';

import Row from '../molecules/row/row';
import Box from '../atoms/box/box';

import DefaultLayout from '../layouts/default/default';

const IndexPage = ({ data }) => {
  const { site } = data;

  const eventEntries = queryEventEntries();
  const blogEntries = queryBlogEntries();

  return (
    <DefaultLayout>
      <Row headline="Vibes">
        <Box />
        {blogEntries.map(({ slug, title }) => (
          <Link to={slug} key={title}>
            {title}
          </Link>
        ))}
        <Box background="purple" size="s" />
      </Row>
      <Row headline="Bar">
        <Box background="lightpink" />

        {blogEntries.map(({ slug, title }) => (
          <Link to={slug} key={title}>
            {title}
          </Link>
        ))}

        {blogEntries.map(({ slug, title }) => (
          <Link to={slug} key={title}>
            {title}
          </Link>
        ))}

        {blogEntries.map(({ slug, title }) => (
          <Link to={slug} key={title}>
            {title}
          </Link>
        ))}

        {blogEntries.map(({ slug, title }) => (
          <Link to={slug} key={title}>
            {title}
          </Link>
        ))}

        {blogEntries.map(({ slug, title }) => (
          <Link to={slug} key={title}>
            {title}
          </Link>
        ))}

        {blogEntries.map(({ slug, title }) => (
          <Link to={slug} key={title}>
            {title}
          </Link>
        ))}
      </Row>
      <Row headline="Kontakt">
        <h4>Events</h4>
        {eventEntries.map(({ slug, title, date }) => (
          <Link to={slug} key={title}>
            <time>{date}</time>
            <p>{title}</p>
          </Link>
        ))}
        <h4>Events</h4>
        {eventEntries.map(({ slug, title, date }) => (
          <Link to={slug} key={title}>
            <time>{date}</time>
            <p>{title}</p>
          </Link>
        ))}
        <h4>Events</h4>
        {eventEntries.map(({ slug, title, date }) => (
          <Link to={slug} key={title}>
            <time>{date}</time>
            <p>{title}</p>
          </Link>
        ))}

        <h4>Events</h4>
        {eventEntries.map(({ slug, title, date }) => (
          <Link to={slug} key={title}>
            <time>{date}</time>
            <p>{title}</p>
          </Link>
        ))}
        <h4>Events</h4>
        {eventEntries.map(({ slug, title, date }) => (
          <Link to={slug} key={title}>
            <time>{date}</time>
            <p>{title}</p>
          </Link>
        ))}
        <h4>Events</h4>
        {eventEntries.map(({ slug, title, date }) => (
          <Link to={slug} key={title}>
            <time>{date}</time>
            <p>{title}</p>
          </Link>
        ))}
        <h4>Events</h4>
        {eventEntries.map(({ slug, title, date }) => (
          <Link to={slug} key={title}>
            <time>{date}</time>
            <p>{title}</p>
          </Link>
        ))}
      </Row>
    </DefaultLayout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(fields: { slug: { eq: $path } }) {
      html
    }
  }
`;

export default IndexPage;
