import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <main>
      <Layout className="bg-lime-200">
        <h1 className="text-5xl font-bold text-center mb-6">About Me</h1>
        <StaticImage
          className="rounded-full"
          alt="Girl with a scarf"
          src="../images/girl.jpg"
          placeholder="blurred"
          width={200}
          height={200}
          padding={1}
        />

        <p className="prose">
          <br />
          <h1>Welcome to the test blog</h1>
          <br />
          Test Blog is a Professional Educational Platform. Here we will provide
          you only interesting content, which you will like very much. We're
          dedicated to providing you the best of Educational, with a focus on
          dependability and Hiking blog. We're working to turn our passion for
          Educational into a booming online website. We hope you enjoy our
          Educational as much as we enjoy offering them to you. I will keep
          posting more important posts on my Website for all of you. Please give
          your support and love. Thanks For Visiting Our Site Have a nice day!
        </p>
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
