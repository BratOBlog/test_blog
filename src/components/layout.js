import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const hideHomeLink = true;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          {!hideHomeLink && (
            <li className={navLinkItem}>
              <Link to="/">Home</Link>
            </li>
          )}
          <li className={navLinkItem}>
            <Link to="/about" className="text-blue-500">
              About
            </Link>
          </li>
        <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={pageTitle}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
