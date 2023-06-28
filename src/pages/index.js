import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const IndexPage = ({data}) => {
  
  return (
    <main pageTitle="Home Page">
      <Layout>
      <h1 className="text-3xl font-bold">Welcome to my blog!</h1>
      <p className="mt-4">This is a test blog.</p>

      <StaticImage
        alt="Beautiful montain landscape with trees"
        src="../images/mountain.jpg"
      />

      {
        data.allMdx.nodes.map(node => (    
        <div className="markdown">
          <article className="text-center m-4" key={node.id}>
            <h2 className=" text-blue-500 font-extrabold text-3xl ">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
          </div>
        ))
      }
    </Layout>
    </main>
  )
}


export const query = graphql`
query {
  allMdx(sort: { frontmatter: { date: DESC }}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`
export const Head = () => <Seo title="Home Page" />

export default IndexPage