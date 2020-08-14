import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"

import * as headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles["title-wrapper"]}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={headerStyles.title}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
      <ul
        className={headerStyles["nav-list"]}>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles["link-active"]}
            to={"/blog"}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles["link-active"]}
            to={"/contact"}>
            Contacts
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles["link-active"]}
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
