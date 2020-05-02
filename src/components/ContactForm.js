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
      <form name="contact" method="POST" data-netlify="true">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea />
        <button type="submit">Submit</button>
      </form>
    </FormStyles>
  )
}

export default ContactForm
