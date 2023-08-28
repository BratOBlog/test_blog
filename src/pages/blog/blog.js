import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allFile.nodes.map((node) => {
        const mdxData = node.childrenMdx[0]; // Get the first item in childrenMdx
        if (!mdxData) return null; // Handle case where childrenMdx is empty

        const frontmatter = mdxData.frontmatter;

        return (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${frontmatter.slug}`}>
                {frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {frontmatter.date}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        id
        childrenMdx {
          frontmatter {
            title
            slug
            date
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;