import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'



const IndexPage = () => {
  return (
    <main className="bg-gray-200">
      <Layout pageTitle="Home Page">
      <h1 className="text-3xl font-bold">Welcome to my Gatsby site!</h1>
      <p className="mt-4">I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
   
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage