import React from "react"
import styled from "styled-components"

const FormStyles = styled.div`
  input {
    width: 100%;
  }
  textarea {
    width: 100%;
  }
`

const ContactForm = () => {
  return (
    <FormStyles>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea />
      </form>
    </FormStyles>
  )
}

export default ContactForm
