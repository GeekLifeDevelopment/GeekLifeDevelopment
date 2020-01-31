import styled from "styled-components"

export const LatestBlogStyles = styled.div`
  ol {
    background-color: #88928c;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    transform: skewY(-5deg);

    li {
      padding: 1.5rem;
    }
  }

  #blog-card-container {
    width: 350px;
    height: 300px;
    position: relative;
    /* background-color: black; */
    border-radius: 10px;
    /* border: 4px solid #333; */
    box-shadow: 5px 5px 10px #333;
    overflow: hidden;

    #category-label {
      position: absolute;
      font-size: 1.2em;
      right: -80px;
      color: white;
      width: 300px;
      padding: 0.5rem;
      z-index: 10;
      transform: rotate(30deg);
      background-color: #585a7e;
      text-align: center;
      top: 20px;
      box-shadow: 5px 5px 10px #333;
    }

    #blog-card-info {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 10px;

      #title-container {
        width: 270px;
        height: 150px;
        position: absolute;
        color: white;
        left: 50%;
        margin-left: -135px;
        top: 30%;
        /* margin-top: -125px; */

        h1 {
          text-align: center;
          font-size: 2em;
          margin: 0;
          text-shadow: 5px 5px 5px #333;
        }

        p {
          padding: 0;
          margin: 0;
          font-style: italic;
        }
      }

      #image-container {
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 10px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
          opacity: 0.6;
        }
      }
    }
  }
`
