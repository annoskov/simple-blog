import * as React from "react"

import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from './blog.module.scss';

const getPostData = () => {
  return useStaticQuery(graphql`
      query {
          allContentfulBlogPost (
              sort: {
                  fields: publishedDate,
                  order: ASC,
              },
              filter: {node_locale: {eq: "en-US"}},
          ) {
              edges {
                  node {
                      title
                      slug
                      publishedDate(fromNow: true)
                  }
              }
          }
      }
  `)
}

const getRenderedPostList = (posts: any) => {
  return posts.allContentfulBlogPost.edges.map((edge: any) => {
    return <li key={edge.node.title} className={blogStyles.post}>
      <Link to={edge.node.slug}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.date}</p>
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
