import React, { Component } from "react"
import MainNavBar from "./MainNavBar"
import MobilNav from "./MobilNav"

class Navigation extends Component {
  state = {
    mobileNavMargin: "-500px",
  }

  showMobileNav = () => {
    if (this.state.mobileNavMargin === "-500px") {
      this.setState({ mobileNavMargin: "0" })
    } else {
      this.setState({ mobileNavMargin: "-500px" })
    }
  }
  render() {
    return (
      <div>
        <MainNavBar showMobileNav={this.showMobileNav} />
        <div id="mobile-nav">
          <MobilNav mobileNavMargin={this.state.mobileNavMargin} />
        </div>
      </div>
    )
  }
}

export default Navigation
