import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <main  className="bg-lime-500">
      <Layout>
      <h1 className="text-3xl font-bold text-center mb-6">About Me</h1>
<img
src="https://images.unsplash.com/photo-1684864271050-e053dac9bfa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
alt="Girl with a scarf"
className="place-content-center rounded border-black border-solid shadow max-w-sm max-h-96"
/>
      <p className="m-3 text-justify font-italic">Welcome To Test Blog
Test Blog is a Professional Educational Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Educational, with a focus on dependability and Hiking blog. We're working to turn our passion for Educational into a booming online website. We hope you enjoy our Educational as much as we enjoy offering them to you.

I will keep posting more important posts on my Website for all of you. Please give your support and love.

Thanks For Visiting Our Site

Have a nice day!</p>
      </Layout>
    </main>
    
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage