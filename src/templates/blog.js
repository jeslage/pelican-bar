import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

const Container = styled.div`
  background: papayawhip;
`

const BlogPost = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter
  return (
    <Container>
      <div className="blog-post">
        <h1>{title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Container>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost
