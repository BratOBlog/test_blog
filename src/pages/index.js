import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
      <h1 className="text-3xl font-bold">Welcome to my Gatsby site!</h1>
      <p className="mt-4">I'm making this by following the Gatsby Tutorial.</p>

      <StaticImage
        alt="Beautiful montain landscape with trees"
        src="../images/mountain.jpg"
      />
    </Layout>
   
    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage