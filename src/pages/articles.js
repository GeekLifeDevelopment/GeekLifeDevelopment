import React from "react"
import Layout from "../components/Layout"
import AllBlogs from "../components/AllBlogs"
import Seo from "../components/Seo"

const ArticlesPage = () => {
  return (
    <>
      <Seo title="Articles" />
      <Layout>
        <AllBlogs />
      </Layout>
    </>
  )
}

export default ArticlesPage
