import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import blogStyles from "../pages/blog.module.scss"
import { AllBlogsStyles } from "./styles/AllBlogsStyles"

const AllBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            timeToRead
            excerpt
            frontmatter {
              title
              category
              date
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    src
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <AllBlogsStyles>
      <div>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.reverse().map(edge => {
            return (
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <li>
                  <div id="blog-card-container">
                    <div id="category-label">
                      <p>{edge.node.frontmatter.category}</p>
                    </div>
                    <div id="blog-card-info">
                      <div id="image-container">
                        <img
                          style={{ margin: "0" }}
                          src={
                            edge.node.frontmatter.featuredImage.childImageSharp
                              .fluid.src
                          }
                        />
                      </div>
                      <div id="title-container">
                        <h1>{edge.node.frontmatter.title}</h1>
                        <p>Date added: {edge.node.frontmatter.date}</p>
                        <p>Reading time {edge.node.timeToRead} min</p>
                      </div>
                      <p style={{ display: "none" }}>{edge.node.excerpt}</p>

                      <p style={{ display: "none" }}>
                        Reading time {edge.node.timeToRead} min
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            )
          })}
        </ol>
      </div>
    </AllBlogsStyles>
  )
}

export default AllBlogs
