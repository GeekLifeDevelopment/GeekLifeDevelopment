import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import LatestBlog from "../components/LatestBlogs"
import { IndexPageStyles } from "../components/styles/IndexPageStyles"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <IndexPageStyles>
          <div id="hero-image-container"></div>

          <LatestBlog />
        </IndexPageStyles>
      </Layout>
    </div>
  )
}

export default IndexPage
