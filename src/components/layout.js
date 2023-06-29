import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container, navLinks, navLinkItem, navLinkText } from "./layout.module.css";
import * as styles from "../styles/global.css";

const Layout = ({ pageTitle, children }) => {
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
    <div className={`bg-gray-100 min-h-screen ${container}`}>
      <header className="bg-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">{data.site.siteMetadata.title}</h1>
        </div>
  
      <nav>
        <ul className={`flex justify-items-evenly ${navLinks}`}>
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

      <main className="container mx-auto py-4 px-6">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
