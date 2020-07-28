import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import * as React from "react"

import headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.titleWrapper}
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
        className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles.linkActive}
            to={"/blog"}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles.linkActive}
            to={"/contact"}>
            Contacts
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.link}
            activeClassName={headerStyles.linkActive}
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
