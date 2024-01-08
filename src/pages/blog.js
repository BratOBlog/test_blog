import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Blog = ({ data } ) => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">Welcome to my blog!</h1>
      <p className="mt-4 font-semibold text-blue-400">This is a test.</p>

      <ul className="my-10 ">
      
        {data.allMarkdownRemark.nodes.map(node => (
          <li className="my-10 rounded border-gray-600 shadow-lg overflow-hidden text-center" key={node.id}>
            <ul key={node.frontmatter.slug}>
              <li>
                <h1 className="text-2xl font-semibold">
                  {node.frontmatter.title}
                </h1>
                <p>{node.frontmatter.date}</p>
                <p>{node.excerpt}</p>
                <Link to={`/blog/${node.frontmatter.slug}`}>
                  <button className="my-10 p-3 text-blue-800 font-semibold border-gray-800 rounded-md bg-blue-300">
                    Read more
                  </button>
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          slug
          title
          date
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`;


export default Blog