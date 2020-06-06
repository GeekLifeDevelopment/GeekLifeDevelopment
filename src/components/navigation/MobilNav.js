import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MobilNavStyles = styled.div`
  #nav-container {
    width: 200px;
    height: 350px;
    position: fixed;
    margin-top: 52px;
    border-bottom-right-radius: 50%;
    border-right: 1px solid white;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.5);

    ul {
      color: white;
      margin: 0%;
      list-style-type: none;
      padding: 1rem;

      li {
        margin: 2rem 0;
        font-size: 1.3em;
      }
    }

    #social-mobile {
      margin-top: 0.3rem;
      color: white;
      padding: 0.5rem;

      i {
        margin: 0 0.5rem;
        font-size: 1.3em;
      }
    }
  }
`

const MobilNav = props => {
  return (
    <MobilNavStyles>
      <div
        style={{ marginLeft: props.mobileNavMargin, transitionDuration: ".5s" }}
        id="nav-container"
      >
        <ul>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="articles"
          >
            <li>Articles</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="#meet-me-section"
          >
            <li onClick={props.closeMobileNav}>Meet me</li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="#contact-form-section"
          >
            <li onClick={props.closeMobileNav}>Say hello</li>
          </Link>
        </ul>
        <div id="social-mobile">
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.facebook.com/GeekLifeDev/?view_public_for=106659110726301"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://twitter.com/GeekLifeDev"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.instagram.com/geeklifedev"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.linkedin.com/in/jasonsorenson/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/GeekLifeDevelopment"
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </MobilNavStyles>
  )
}

export default MobilNav
