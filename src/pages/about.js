import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main  className="bg-lime-500">
      <h1 className="text-3xl font-bold">About Me</h1>
      <Link to="/" className="text-blue-500">Back to Home</Link>
      <p className="mt-4">Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage