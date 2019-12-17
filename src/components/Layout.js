import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import { Helmet } from "react-helmet"

import "../styles/index.scss"
import layoutStyles from "./layouts.module.scss"

const Layout = props => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Orbitron&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {props.children}
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Layout
