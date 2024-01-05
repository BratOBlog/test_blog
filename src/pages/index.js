import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";


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
          </div>
        </hero>

    
      </Layout>
    </main>
  );
};


export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
