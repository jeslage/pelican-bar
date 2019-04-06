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

  const data = blogEntries.edges.map(({ node }) => {
    const item = {
      slug: node.fields.slug,
      title: node.frontmatter.title,
      date: node.frontmatter.date
    };
    return item;
  });

  return data;
};

export default queryBlogEntries;
