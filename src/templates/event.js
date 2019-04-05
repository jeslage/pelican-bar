import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'
import SiteWrapper from '../wrapper/siteWrapper'

const Container = styled.div`
  background: papayawhip;
`

const BlogPost = ({ data }) => {
  const { site, content } = data
  const { frontmatter, html } = content
  const { title } = frontmatter
  return (
    <SiteWrapper data={site}>
      <Container className="blog-post">
        <h1>{title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </SiteWrapper>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(frontmatter: { type: { eq: "index" } }) {
      html
      frontmatter {
        title
        headline
        subline
      }
    }
    content: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost
