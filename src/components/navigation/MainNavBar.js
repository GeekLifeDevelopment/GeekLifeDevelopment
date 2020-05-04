import React from "react"
import { MainNavBarStyles } from "./styles/MainNavBarStyles"
import Logo from "../../images/geek-life-development-logo.png"
import { Link } from "gatsby"

const MainNavBar = props => {
  return (
    <div>
      <MainNavBarStyles>
        <div id="navbar-container">
          <div id="logo-container">
            <Link to="/">
              <img src={Logo} alt="Geek Life Development Logo" />
            </Link>
            <p>Geek Life Development</p>
          </div>

          <div id="hamburger-logo">
            <i onClick={props.showMobileNav} className="fas fa-bars"></i>
          </div>
          {/* <Link style={{ textDecoration: "none", color: "white" }} to="/"> */}
          <div id="logo-container-mobile">
            <Link to="/">
              <img src={Logo} alt="Geek Life Development Logo" />
            </Link>
            <p>Geek Life Development</p>
          </div>
          {/* </Link> */}

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
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.facebook.com/GeekLifeDev/?view_public_for=106659110726301"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://twitter.com/GeekLifeDev"
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  style={{ color: "white", textDecoration: "none" }}
                  href="https://www.linkedin.com/in/jasonsorenson/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GeekLifeDevelopment"
                  style={{ color: "white", textDecoration: "none" }}
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MainNavBarStyles>
    </div>
  )
}

export default MainNavBar
