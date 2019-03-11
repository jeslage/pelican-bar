import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'

const Container = styled.div`
  background: red;
`

const IndexPage = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark
  const { title } = frontmatter
  return (
    <Container>
      <div className="blog-post">
        <h1>{title}</h1>
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

export default IndexPage
