import React from "react"
import styled from "styled-components"

const TitleCss = styled.div`
  .title-container {
    position: relative;
    background-color: #83b799;
    margin: 2rem auto;
    max-width: 500px;
    text-align: center;
    transform: skew(10deg, -7deg);
    box-shadow: 5px 5px 20px 10px;
    border: 1px solid black;

    @media (max-width: 600px) {
      width: 400px;
    }

    @media (max-width: 500px) {
      width: 280px;
    }

    h1 {
      margin: 0;
      padding: 1rem;
      transform: rotate(5deg);
      font-size: 2em;
      color: white;
      font-weight: bold;
    }

    i {
      position: absolute;
      top: -20px;
      left: -35px;
      font-size: 3em;
    }
  }
`

const Title = props => {
  return (
    <TitleCss>
      <div className="title-container">
        <i className={props.icon}></i>
        <h1>{props.title}</h1>
      </div>
    </TitleCss>
  )
}

export default Title
