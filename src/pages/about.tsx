import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>My bio will be here</p>
      <Link to={"/contact"}>My contacts</Link>
    </Layout>
  )
}

export default AboutPage
