import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import GoogleSearch from "../components/search"

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

  return (
    <div>
      <header>
        <nav className="p-5 bg-emerald-500 shadow md:flex md:items-center md:justify-between">
          <div>
            <span className="text-2xl font-bold cursor-pointer">
              {data.site.siteMetadata.title}
            </span>
          </div>
          <ul className="md:flex md:items-center">
            <li className="mx-4">
              <Link
                to="/"
                className="text-xl hover:text-yellow-500 duration-500 "
              >
                HOME
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/author"
                className="text-xl hover:text-yellow-500 duration-500 "
              >
                Author
              </Link>
            </li>
            <GoogleSearch />
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-4 px-6 text-center">
        <h1 className="text-3xl font-bold mb-4">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
