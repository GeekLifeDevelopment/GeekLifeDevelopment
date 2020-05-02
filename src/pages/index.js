import React from "react"

import HeroImage from "../images/geek-life-development-hero-image.jpg"
import HeroImageLogo from "../images/geek-life-development-hero-logo.png"
import ProfileImage from "../images/jasonandbecky.jpg"

import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import LatestBlog from "../components/LatestBlogs"
import { IndexPageStyles } from "../components/styles/IndexPageStyles"

import Button from "../components/controls/Button"
import ProjectCard from "../components/ProjectCard"
import BnBImage from "../images/butcher-and-barrel.jpg"
import TimberlineImage from "../images/timberline.jpg"
import KodiakImage from "../images/kodiak.jpg"
import ContactForm from "../components/ContactForm"

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
          <h1 className="section-title">Hi, I'm Jason. Nice to meet you.</h1>
          <div id="about-section">
            <img
              style={{ borderRadius: "50%" }}
              src={ProfileImage}
              alt="Profile image of my wife and me"
            />
            <div id="about-text">
              <p>
                Lorem ipsum dolor amet air plant wayfarers ugh tbh, master
                cleanse selvage asymmetrical shaman blue bottle keytar VHS
                lumbersexual. Quinoa enamel pin intelligentsia schlitz roof
                party occupy. Man bun copper mug unicorn, kale chips put a bird
                on it palo santo before they sold out. Asymmetrical seitan
                meditation palo santo bitters. chips put a bird on it palo santo
                before they sold out. Asymmetrical seitan meditation palo santo
                bitters.chips put a bird on it palo santo before they sold out.
                Asymmetrical seitan meditation palo santo bitters.chips put a
                bird on it palo santo before they sold out. Asymmetrical seitan
                meditation palo santo bitters.chips put a bird on it palo santo
                before they sold out. Asymmetrical seitan meditation palo santo
                bitters.chips put a bird on it palo santo before they sold out.
                Asymmetrical seitan meditation palo santo bitters.
              </p>
              <Button btnName="More" />
            </div>
          </div>
          <h1 className="section-title">What's New</h1>
          <LatestBlog />
          <h1 className="section-title">Recent Work</h1>
          <p style={{ textAlign: "center", margin: "0" }}>
            Here are a few of my recent projects. Want to see more? send me a
            line.
          </p>
          <div id="project-section">
            <ProjectCard
              image={BnBImage}
              title="Butcher & Barrel"
              description="Simple resturant website using Bootstrap, HTML5 and a little
            Javascript"
              link="/butcherandbarrel.pub"
            />
            <ProjectCard
              image={TimberlineImage}
              title="Timberline"
              description="Static site built with React and Gatsby js"
            />
            <ProjectCard
              image={KodiakImage}
              title="Kodiak"
              description="Static site built with React and Gatsby js and styled components"
            />
          </div>

          <div id="contact-form-section">
            <h1 className="section-title">Get in Touch</h1>
            <p style={{ textAlign: "center", margin: "0" }}>
              Want to connect? Hit me up with the fom below.
            </p>
            <div className="form-background">
              <ContactForm />
            </div>
          </div>
        </IndexPageStyles>
      </Layout>
    </>
  )
}

export default IndexPage
