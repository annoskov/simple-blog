import * as React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

const ContactPage = () => {
  return (
    <div>
      <Header siteTitle={'Anton Noskov Blog'}/>
      <h1>My Contacts</h1>
      <p>Phone: 954543543543</p>
      <p>My Twitter: <a href='https://twitter.com/anton_noskovv' target='_blank'>@anton_noskovv</a></p>
      <Footer/>
    </div>
  )
}

export default ContactPage
