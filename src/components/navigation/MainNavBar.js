import React from "react"
import { MainNavBarStyles } from "./styles/MainNavBarStyles"
import Logo from "../../images/geek-life-development-logo.png"

const MainNavBar = () => {
  return (
    <div>
      <MainNavBarStyles>
        <div id="navbar-container">
          <div id="logo-container">
            <img src={Logo} alt="Geek Life Development Logo" />
            <p>Geek Life Development</p>
          </div>
          <div id="hamburger-logo">
            <i className="fas fa-bars"></i>
          </div>
          <div id="logo-container-mobile">
            <img src={Logo} alt="Geek Life Development Logo" />
            <p>Geek Life Development</p>
          </div>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
          <div id="social-container">
            <ul>
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-twitter"></i>
              </li>
              <li>
                <i className="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i className="fab fa-github"></i>
              </li>
            </ul>
          </div>
        </div>
      </MainNavBarStyles>
    </div>
  )
}

export default MainNavBar
