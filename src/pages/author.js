import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "../components/carousel";



const AboutPage = () => {
  return (
    <main>
      <Layout className="bg-lime-200">
        <h1 className="text-5xl font-bold self-center mb-6">About Me</h1>
        <StaticImage
          className="rounded-full"
          alt="Girl with a scarf"
          src="../images/girl.jpg"
          placeholder="blurred"
          width={200}
          height={200}
          padding={1}
        />

<h1 className="prose-h1: text-blue-500 my-6 text-3xl ">Welcome to the test blog</h1>

        <p className="bg-green-500 rounded-lg p-3">
          Test Blog is a Professional Educational Platform. Here we will provide
          you only interesting content, which you will like very much. We're
          dedicated to providing you the best of Educational, with a focus on
          dependability and Hiking blog.
          <span className=""> We're working to turn our passion
            </span>  for
          Educational into a booming online website. We hope you enjoy our
          Educational as much as we enjoy offering them to you. I will keep
          posting more important posts on my Website for all of you. Please give
          your support and love. Thanks For Visiting Our Site Have a nice day!
        </p>


        <Carousel />
      </Layout>
    </main>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
