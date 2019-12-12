import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import blogStyles from "../pages/blog.module.scss"

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
    <div>
      <Layout>
        <h1>Fart Page</h1>
        <ol style={{ display: "flex" }} className={blogStyles.posts}>
          {data.allMarkdownRemark.edges
            .slice(Math.max(data.allMarkdownRemark.edges.length - 3, 0))
            .reverse()
            .map(edge => {
              return (
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <li className={blogStyles.post}>
                    <img
                      src={
                        edge.node.frontmatter.featuredImage.childImageSharp
                          .fluid.src
                      }
                    />
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.excerpt}</p>
                    <p>{edge.node.frontmatter.date}</p>
                    <p>Reading time {edge.node.timeToRead} minutes</p>
                  </li>
                </Link>
              )
            })}
        </ol>
      </Layout>
    </div>
  )
}

export default LatestBlog
