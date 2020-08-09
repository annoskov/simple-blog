import * as React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>My Contacts</h1>
      <p>Phone: 954543543543</p>
      <p>My Twitter: <a href='https://twitter.com/anton_noskovv' target='_blank'>@anton_noskovv</a></p>
    </Layout>
  )
}

export default ContactPage
