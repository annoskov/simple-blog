import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: "flex"
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
      <ul
        style={{
          padding: '20px 0 0 30px',
          margin: 0,
          height: '100%',
          fontSize: '28px',
          width: '316px',
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          listStyleType: "none",
        }}>
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            to={"/blog"}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            to={"/contact"}>
            Contacts
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              cursor: "pointer",
            }}
            to={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
