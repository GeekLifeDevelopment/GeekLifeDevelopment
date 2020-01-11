import React from "react"

import HeroImage from "../images/geek-life-development-hero-image.jpg"
import HeroImageLogo from "../images/geek-life-development-hero-logo.png"
import ProfileImage from "../images/jasonandbecky.jpg"

import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
// import LatestBlog from "../components/LatestBlogs"
import { IndexPageStyles } from "../components/styles/IndexPageStyles"

import Button from "../components/controls/Button"

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

          <div id="about-section">
            <div id="image-container">
              <img src={ProfileImage} alt="Profile image of my wife and me" />
            </div>
            <div id="about-text">
              Lorem ipsum dolor amet air plant wayfarers ugh tbh, master cleanse
              selvage asymmetrical shaman blue bottle keytar VHS lumbersexual.
              Quinoa enamel pin intelligentsia schlitz roof party occupy. Man
              bun copper mug unicorn, kale chips put a bird on it palo santo
              before they sold out. Asymmetrical seitan meditation palo santo
              bitters.
              <div style={{ float: "right", margin: "2rem" }}>
                <Button btnName="More" />
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
