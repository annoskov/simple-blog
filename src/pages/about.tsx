import * as React from 'react';
import {Link} from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header siteTitle={'Anton Noskov Blog'}/>
      <h1>About</h1>
      <p>My bio will be here</p>
      <Link to={'/contact'}>My contacts</Link>
      <Footer/>
    </div>
  )
}

export default AboutPage;
