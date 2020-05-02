import React from "react"
import styled from "styled-components"

const FormStyles = styled.div`
  input {
    width: 100%;
    border: none;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
  textarea {
    width: 100%;
    height: 200px;
    border: none;
    border-radius: 5px;
  }
`

const ContactForm = () => {
  return (
    <FormStyles>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea />
        <button type="submit">Submit</button>
      </form>
    </FormStyles>
  )
}

export default ContactForm
