import * as React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
      <Header siteTitle={'Anton Noskov Blog'}/>
      <h1>Hello!</h1>
      <h2>I'm Anton, a frontend developer</h2>
      <p>Need a developer? <Link to={"/contact"}>Contact me.</Link></p>
      <Footer/>
    </div>
  )
}

export default IndexPage
