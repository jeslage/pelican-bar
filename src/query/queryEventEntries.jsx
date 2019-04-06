import { useStaticQuery, graphql } from 'gatsby';

const queryEventEntries = () => {
  const { eventEntries } = useStaticQuery(graphql`
    query {
      eventEntries: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "event" } } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  const data = eventEntries.edges.map(({ node }) => {
    const event = {
      slug: node.fields.slug,
      title: node.frontmatter.title,
      date: node.frontmatter.date
    };
    return event;
  });

  return data;
};

export default queryEventEntries;