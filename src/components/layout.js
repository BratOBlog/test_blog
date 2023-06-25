import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {

    const hideHomeLink = true;

  return (
    <div>
      <nav>
        <ul>
           {!hideHomeLink && (
            <li>
              <Link to="/">Home</Link>
            </li>
           )}
          <Link to="/about" className="text-blue-500">About</Link>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout