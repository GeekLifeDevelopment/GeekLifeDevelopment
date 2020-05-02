import React from "react"
import { MainNavBarStyles } from "./styles/MainNavBarStyles"
import Logo from "../../images/geek-life-development-logo.png"
import { Link } from "gatsby"

const MainNavBar = props => {
  return (
    <div>
      <MainNavBarStyles>
        <div id="navbar-container">
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            <div id="logo-container">
              <img src={Logo} alt="Geek Life Development Logo" />
              <p>Geek Life Development</p>
            </div>
          </Link>

          <div id="hamburger-logo">
            <i onClick={props.showMobileNav} className="fas fa-bars"></i>
          </div>

          <div id="logo-container-mobile">
            <Link to="/">
              <img src={Logo} alt="Geek Life Development Logo" />
            </Link>
            <p>Geek Life Development</p>
          </div>

          <ul>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/articles"
            >
              <li>Articles</li>
            </Link>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="/meet-me"
            >
              <li>Meet me</li>
            </Link>
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to="say-hello"
            >
              <li>Say hello</li>
            </Link>
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
