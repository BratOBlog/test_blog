import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div style={{ width: "500px", margin: "auto" }}>
        <p className="my-6">{data.mdx.frontmatter.date}</p>
        <div className="prose text-justify">{children}</div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    allFile(filter: { id: { eq: $id }, ext: { in: [".md", ".mdx"] } }) {
      nodes {
        childMdx {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
