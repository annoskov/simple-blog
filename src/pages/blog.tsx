import * as React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from './blog.module.scss';

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
                      fields {
                          slug
                      }
                  }
              }
          }
      }
  `)
}

const getRenderedPostList = (posts: any) => {
  return posts.allMarkdownRemark.edges.map((edge: any) => {
    return <li key={edge.node.frontmatter.title} className={blogStyles.post}>
      <Link to={edge.node.fields.slug}>
        <h2>{edge.node.frontmatter.title}</h2>
        <p>{edge.node.frontmatter.date}</p>
      </Link>
    </li>
  })
}

const BlogPage = () => {
  const posts = getPostData()

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>{getRenderedPostList(posts)}</ol>
    </Layout>
  )
}

export default BlogPage
