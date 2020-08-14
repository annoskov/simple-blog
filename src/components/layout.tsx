import * as React from "react"
import * as PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  return (
    <div className={layoutStyles.container}>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div className={layoutStyles.content}>
        <main>{children}</main>
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
