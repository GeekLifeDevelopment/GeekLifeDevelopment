import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import blogStyles from "../pages/blog.module.scss"

const LatestBlogStyles = styled.div`
  h1 {
    padding: 2rem;
    text-decoration: none;
  }

  ol {
    background-color: #88928c;
    display: flex;
    transform: skewY(-5deg);
    li {
      background-color: #bbcfc3;
      box-shadow: 5px 10px 10px #4a6478;

      img {
        max-height: 8rem;
        width: 100%;
        object-fit: cover;
      }
      p {
        text-decoration: none;
      }
      color: black;
      margin: 2rem;
      padding: 1rem;
    }
  }
`

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
        <h1>Whats New</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges
            .slice(Math.max(data.allMarkdownRemark.edges.length - 3, 0))
            .reverse()
            .map(edge => {
              return (
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <li>
                    <img
                      src={
                        edge.node.frontmatter.featuredImage.childImageSharp
                          .fluid.src
                      }
                    />
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.excerpt}</p>
                    <p>{edge.node.frontmatter.date}</p>
                    <p>Reading time {edge.node.timeToRead} min</p>
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
