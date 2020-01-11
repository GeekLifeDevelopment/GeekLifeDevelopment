import React from "react"

import HeroImage from "../images/geek-life-development-hero-image.jpg"
import HeroImageLogo from "../images/geek-life-development-hero-logo.png"

import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
// import LatestBlog from "../components/LatestBlogs"
import { IndexPageStyles } from "../components/styles/IndexPageStyles"

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Geek Life Development</title>
      </Helmet>
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

              <div id="code-logos">
                <i style={{ color: "#e44d26" }} className="fab fa-html5"></i>
                <i style={{ color: "#2965f1" }} className="fab fa-css3-alt"></i>
                <i style={{ color: "#61dbfb" }} className="fab fa-react"></i>
                <i style={{ color: "#F0DB4F" }} className="fab fa-js"></i>
              </div>
            </div>
          </div>

          {/* <LatestBlog /> */}
        </IndexPageStyles>
      </Layout>
    </>
  )
}

export default IndexPage
