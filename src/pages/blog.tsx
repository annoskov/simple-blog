import * as React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const getPostData = () => {
  return useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                          title
                          date
                      }
                      html
                      excerpt
                  }
              }
          }
      }
  `)
}

const getRenderedPostList = (posts: any) => {
  return posts.allMarkdownRemark.edges.map((edge: any) => {
    return <li>
      <h2>{edge.node.frontmatter.title}</h2>
      <p>{edge.node.frontmatter.date}</p>
    </li>
  })
}

const BlogPage = () => {
  const posts = getPostData();

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{getRenderedPostList(posts)}</ol>
    </Layout>
  )
}

export default BlogPage
