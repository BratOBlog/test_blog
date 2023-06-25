import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <main  className="bg-lime-500">
      <Layout pageTitle="About">
      <Link to="/" className="text-blue-500">Back to Home</Link>
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="mt-4">Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </main>
    
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage