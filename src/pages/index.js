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
                <i
                  style={{ color: "lightgrey" }}
                  className="fas fa-gamepad"
                ></i>
                <i style={{ color: "red" }} className="fab fa-jedi-order"></i>
              </div>
            </div>
          </div>
          <div id="meet-me-section">
    
            <h1 className="section-title">Hi, I'm Jason. Nice to meet you.</h1>
            <div id="about-section">
              <img
                style={{ borderRadius: "50%" }}
                src={ProfileImage}
                alt="Profile image of my wife and me"
              />
              <div id="about-text">
                <p>
                  I am a full stack web developer living in Wisconsin with my
                  beautiful wife Rebecca, and our three daughters. We are avid
                  museum goes and love a multitude of outdoor activities.
                  Hanging out at the beach and in a canoe are some of our
                  favorites. Outside of family and work I enjoy retro video
                  games, comics, Star Wars, you know, normal geek stuff.
                </p>
                <p>
                  Arriving to the developer field a little late, my journey
                  started in 2015 when I decided to leave my arduous sales
                  career of 20 + years and head back to school. Without going
                  into too much detail regarding my sales career, that’s a blog
                  coming soon 😊. I can say outside of marring my wife and
                  having our three children this was the best decision I have
                  ever made.
                </p>
                <p>
                  Geek Life Development is a working living project that will
                  continue to grow. Into what I have no idea, but for now it is
                  a place for me to share ideas, tutorials, dev tips, & connect with others.
                </p>
                <p>
                  I am most comfortable in Jamstack world, but do
                  have some experience with PHP, C#, and Java. I love connecting
                  with new people to share ideas. Don’t be shy drop me a line!
                </p>
                <Button btnName="Say Hi" link="#contact-form-section" />
              </div>
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
              link="http://www.butcherandbarrel.pub"
            />
            <ProjectCard
              image={TimberlineImage}
              title="Timberline"
              description="Static site built with React and Gatsby js"
              link="http://www.timberlineclean.com"
            />
            <ProjectCard
              image={KodiakImage}
              title="Kodiak"
              description="Static site built with React and Gatsby js and styled components"
              link="http://www.kodiakequip.com"
            />
          </div>

          <div id="contact-form-section">
            <h1 className="section-title">Get in Touch</h1>
            <p style={{ textAlign: "center", margin: "0" }}>
              Want to connect? Hit me up with the fom below.
            </p>
            <div>
              <div className="form-background">
                <ContactForm />
              </div>
            </div>
          </div>
        </IndexPageStyles>
      </Layout>
    </>
  )
}

export default IndexPage
