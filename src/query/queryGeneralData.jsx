import { useStaticQuery, graphql } from 'gatsby';

const queryGeneralData = () => {
  const { general } = useStaticQuery(graphql`
    query {
      general: markdownRemark(frontmatter: { type: { eq: "general" } }) {
        frontmatter {
          globals {
            title
          }
          seo {
            description
            keywords
            title
          }
        }
      }
    }
  `);

  const { seo, globals } = general.frontmatter;

  return { seo, globals };
};

export default queryGeneralData;
