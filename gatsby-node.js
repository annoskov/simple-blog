/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

/**
 * Only for Markdown Remark cases
 */
// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//
//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")
//
//     createNodeField({
//       node,
//       name: "slug",
//       value: slug
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blog.tsx")

  const res = await graphql(`
    query {
       allContentfulBlogPost (
              filter: {node_locale: {eq: "en-US"}},
          ) {
              edges {
                  node {
                      slug
                  }
              }
          }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
