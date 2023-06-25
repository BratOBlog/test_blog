import * as React from 'react'
import { Link } from 'gatsby'



const IndexPage = () => {
  return (
    <main className="bg-gray-200">
      <h1 className="text-3xl font-bold">Welcome to my Gatsby site!</h1>
      <Link to="/about" className="text-blue-500">About</Link>
      <p className="mt-4">I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage