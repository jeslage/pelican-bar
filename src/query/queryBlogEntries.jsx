import { useStaticQuery, graphql } from 'gatsby';

const queryBlogEntries = () => {
  const { blogEntries } = useStaticQuery(graphql`
    query {
      blogEntries: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog" } } }
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

  return blogEntries.edges;
};

export default queryBlogEntries;
