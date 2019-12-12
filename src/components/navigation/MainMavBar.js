import React from "react"
import { MainNavBarStyles } from "./styles/MainNavBarStyles"

const MainNavBar = () => {
  return (
    <div>
      <MainNavBarStyles>
        <div id="navbar-container">
          <div id="logo-container">Logo</div>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
          <div id="social-container">Social Stuff</div>
        </div>
      </MainNavBarStyles>
    </div>
  )
}

export default MainNavBar
