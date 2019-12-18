import React from "react"
import { Link } from "gatsby"
import HeroImage from "../images/geek-life-development-hero-image.jpg"
import HeroImageLogo from "../images/geek-life-development-hero-logo.png"

import Layout from "../components/Layout"
import LatestBlog from "../components/LatestBlogs"
import { IndexPageStyles } from "../components/styles/IndexPageStyles"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <IndexPageStyles>
          <div id="hero-image-container">
            <div id="overlay"></div>
            <div id="image-container">
              <img src={HeroImage} alt="" />
            </div>
            <div id="hero-overlay-container"></div>
            <div id="hero-logo-container">
              <img src={HeroImageLogo} alt="" />
            </div>
          </div>

          <LatestBlog />
        </IndexPageStyles>
      </Layout>
    </div>
  )
}

export default IndexPage
