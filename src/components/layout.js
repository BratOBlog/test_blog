import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle} from "./layout.module.css";
  import * as styles from '../styles/global.css'

const Layout = ({ heading, pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    const isHomePage = pageTitle === "Home Page";
  
    return (
      <div className={container}> <header>
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </header>
        <nav>
          <ul className={`bg-green-300 opacity-30 flex align-items-evenly ${navLinks}`}>
            {!isHomePage && (
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                  Home
                </Link>
              </li>
            )}
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
            <li>
              {!isHomePage && (
                <Link to="/" className={navLinkText}>
                  Back to Home
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    );
  };
  
  export default Layout;