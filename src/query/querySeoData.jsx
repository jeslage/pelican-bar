import { useStaticQuery, graphql } from 'gatsby';

const querySeoData = () => {
  const { seo } = useStaticQuery(graphql`
    query {
      seo: markdownRemark(frontmatter: { type: { eq: "seo" } }) {
        frontmatter {
          title
          description
          keywords
        }
      }
    }
  `);

  const { title: seoTitle, description: seoDescription, keywords: seoKeywords } = seo.frontmatter;

  return { seoTitle, seoDescription, seoKeywords };
};

export default querySeoData;
