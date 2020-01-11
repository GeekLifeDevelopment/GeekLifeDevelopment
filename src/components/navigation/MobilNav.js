import React from "react"
import styled from "styled-components"

const MobilNavStyles = styled.div`
  #nav-container {
    width: 200px;
    height: 350px;
    position: absolute;
    border-bottom-right-radius: 50%;
    border-right: 1px solid white;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);

    ul {
      color: white;
      margin: 0%;
      list-style-type: none;
      padding: 1rem;

      li {
        margin: 1rem 0;
        font-size: 1.5em;
      }
    }

    #social-mobile {
      margin-top: 2rem;
      color: white;
      padding: 1.5rem;

      i {
        margin: 0 0.5rem;
        font-size: 1em;
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
          <li>Tutorials</li>
          <li>Blog</li>
          <li>Get in touch</li>
        </ul>
        <div id="social-mobile">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>
    </MobilNavStyles>
  )
}

export default MobilNav
