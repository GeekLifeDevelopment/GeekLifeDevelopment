import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import blogStyles from "../pages/blog.module.scss"
import { LatestBlogStyles } from "./styles/LatestBlogStyles"

const LatestBlog = () => {
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
    <LatestBlogStyles>
      <div>
        <h1 style={{ textAlign: "center", margin: ".5rem" }}>What's New</h1>

        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges
            .slice(Math.max(data.allMarkdownRemark.edges.length - 3, 0))
            .reverse()
            .map(edge => {
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
                              edge.node.frontmatter.featuredImage
                                .childImageSharp.fluid.src
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
    </LatestBlogStyles>
  )
}

export default LatestBlog
