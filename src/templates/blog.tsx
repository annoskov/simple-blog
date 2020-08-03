import * as React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"


/**
 * Only for Markdown Remark cases
 */
//markdownRemark(fields: {slug: {eq: $slug}}) {
//             frontmatter {
//                 title
//                 date
//             }
//             html

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(fromNow: true)
            body {
                json
            }
        }
    }

`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const url = node.data.target.fields.file['en-US'].url;
        const alt = node.data.target.fields.title['en-US'];
        return <img src={url} alt={alt}/>
      }
    }
  }

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default Blog
