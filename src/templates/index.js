import React from 'react'
import { graphql, Link } from 'gatsby'

import styled from 'styled-components'

const Container = styled.div`
  background: #f4f4f4;
`

const IndexPage = ({ data }) => {
  const { site, blogEntries, eventEntries } = data
  const { frontmatter } = site

  const { title } = frontmatter

  return (
    <Container>
      <div className="blog-post">
        <h1>{title}</h1>

        <h2>BlogPosts</h2>
        {blogEntries.edges.map(({ node }) => (
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        ))}
        <h2>Events</h2>
        {eventEntries.edges.map(({ node }) => (
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        ))}
      </div>
    </Container>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
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
          }
        }
      }
    }
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
          }
        }
      }
    }
  }
`

export default IndexPage
