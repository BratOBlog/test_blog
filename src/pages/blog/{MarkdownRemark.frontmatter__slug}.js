import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"

const BlogPostTemplate = ({ data: { markdownRemark } }) => {
const {frontmatter, html} = markdownRemark;

  return (
    <Layout>
        <div className="prose" key={frontmatter.slug}>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    </Layout>
  );
};

export const query = graphql`
query ($id: String!) {
  markdownRemark(id: { eq: $id }) {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      title
    }
    html
  }
}
`;

export default BlogPostTemplate
