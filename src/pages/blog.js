import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const BlogPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
        <Link to="/" className="text-blue-500">Back to Home</Link>
        <p>My cool posts will go in here</p>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage