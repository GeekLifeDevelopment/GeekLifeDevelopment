import React from "react"
import styled from "styled-components"

const ButtonStyles = styled.button`
  padding: 2px;
  border-radius: 10px;
  border: none;
  width: 10rem;
  background-color: #83b799;
  color: white;
`

const Button = props => {
  return <ButtonStyles>{props.btnName}</ButtonStyles>
}

export default Button
