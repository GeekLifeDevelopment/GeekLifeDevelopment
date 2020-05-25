import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import styled from "styled-components"
import Seo from "../components/Seo"
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

import { FacebookIcon, TwitterIcon, LinkedinIcon, EmailIcon } from "react-share"

import FacebookImage from "../images/kodiak.jpg"

const BlogBody = styled.div`
  width: 80%;
  padding: 0.5rem;
  margin: 3rem auto;

  h1 {
    text-align: center;
    margin: 2rem auto;
    padding: 1rem 0;
    font-weight: bold;
    border-bottom: 4px solid #83b799;
    width: 700px;
    /* transform: rotate(-5deg); */

    @media (max-width: 750px) {
      width: 300px;
      margin: 2rem auto;
    }
  }

  .icon-container {
    width: 320px;
    display: flex;
    justify-content: space-evenly;
  }
`

export default ({ data }) => {
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  let slug = data.markdownRemark.fields.slug
  let pageUrl = "geeklifedevelopment.com/blog/" + slug

  console.log(pageUrl)
  return (
    <>
      <Seo title={post.frontmatter.title} />
      <Layout>
        <div id="image-container" style={{ width: "100%", height: "450px" }}>
          <Img
            fluid={featuredImgFluid}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <BlogBody>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <div className="share-btn-container">
            <h4>Share this article</h4>
            <div className="icon-container">
              <TwitterShareButton
                url={pageUrl}
                title={post.frontmatter.title}
                children="click here"
              >
                <TwitterIcon size={32} round="yes" />
              </TwitterShareButton>

              <FacebookShareButton url={pageUrl} title={post.frontmatter.title}>
                <FacebookIcon url={pageUrl} size={32} round="yes" />
              </FacebookShareButton>
              <LinkedinShareButton
                url={pageUrl}
                title={post.frontmatter.title}
                source="Geek Life Development"
              >
                <LinkedinIcon size={32} round="yes" />
              </LinkedinShareButton>
              <EmailShareButton url={pageUrl} subject={post.frontmatter.title}>
                <EmailIcon size={32} round="yes" />
              </EmailShareButton>
            </div>
          </div>
        </BlogBody>
      </Layout>
    </>
  )
}
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
