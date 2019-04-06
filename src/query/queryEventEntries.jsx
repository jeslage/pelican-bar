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

  return eventEntries.edges;
};

export default queryEventEntries;
