import React, { Component } from "react"
import MainNavBar from "./MainNavBar"
import MobilNav from "./MobilNav"

class Navigation extends Component {
  state = {
    mobileNavMargin: "-500px",
    mobileBtn: "fas fa-bars",
  }

  showMobileNav = () => {
    if (this.state.mobileNavMargin === "-500px") {
      this.setState({ mobileNavMargin: "0", mobileBtn: "fas fa-times" })
    } else {
      this.setState({ mobileNavMargin: "-500px", mobileBtn: "fas fa-bars" })
    }
  }
  render() {
    return (
      <div>
        <MainNavBar
          showMobileNav={this.showMobileNav}
          mobileBtn={this.state.mobileBtn}
        />
        <div id="mobile-nav">
          <MobilNav mobileNavMargin={this.state.mobileNavMargin} />
        </div>
      </div>
    )
  }
}

export default Navigation
