import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  header,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle} from "./layout.module.css";
  import * as styles from '../styles/global.css'

const Layout = ({ header, pageTitle, children }) => {

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
      <div className={`${container}`}>
      <header>
      {data.site.siteMetadata.title}
        <nav>
          <ul className={`flex align-items-evenly ${navLinks}`}>
            <li className={navLinkItem}>
              <Link to="/author" className={navLinkText}>
                Author
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
        </header>

        <main>
          <h1>{pageTitle}</h1>
          {children}

          
        </main>
        </div>
    );
  };
  
  export default Layout;