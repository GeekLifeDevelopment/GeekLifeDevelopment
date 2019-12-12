import React from "react"
import { HeaderStyles } from "./styles/HeaderStyles"
import Navigation from "./navigation/Navigation"

const Header = () => {
  return (
    <div>
      <HeaderStyles>
        <Navigation />
      </HeaderStyles>
    </div>
  )
}

export default Header
