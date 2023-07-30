import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import MyQuote from "../pages/blog/quote";

const IndexPage = ({ data }) => {
  return (
    <main pageTitle="Home Page">
      <Layout>
        <h1 className="text-3xl font-bold">Welcome to my blog!</h1>
        <p className="mt-4">This is a test.</p>

        <hero>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-40 mb-8 md:mb-40">
            <div>
              <StaticImage
                alt="Beautiful mountain landscape with trees"
                src="../images/mountain.jpg"
                placeholder="blurred"
                className="rounded-xl shadow-md"
              />
            </div>
            <div>
              <MyQuote className="transition-opacity animate-pulse" />
            </div>
          </div>
        </hero>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.allMdx.nodes.map((node) => (
            <article
              className="bg-white rounded-xl shadow-md overflow-hidden"
              key={node.id}
            >
              <div className="p-6">
                <h2 className="text-blue-500 font-extrabold text-3xl mb-4">
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  Posted: {node.frontmatter.date}
                </p>
                <p className="text-base mb-6">{node.excerpt}</p>
                <hr />
              </div>
            </article>
          ))}
        </div>
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
`;

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;