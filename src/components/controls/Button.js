import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ButtonStyles = styled.button`
  padding: 2px;
  border-radius: 10px;
  border: none;
  width: 10rem;
  background-color: #83b799;
  color: white;

  &:hover {
    cursor: pointer;
  }
`

const Button = props => {
  return (
    <Link to={props.link}>
      <ButtonStyles>{props.btnName}</ButtonStyles>
    </Link>
  )
}

export default Button
