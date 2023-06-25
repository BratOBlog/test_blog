import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

    const hideHomeLink = true;

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
           {!hideHomeLink && (
            <li className={navLinkItem}>
              <Link to="/">Home</Link>
            </li>
           )}
           <li className={navLinkItem}>
          <Link to="/about" className="text-blue-500">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={pageTitle}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout