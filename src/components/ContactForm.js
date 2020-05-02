import React from "react"
import styled from "styled-components"

const FormStyles = styled.div`
  form {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  input {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: none;
    margin-bottom: 1rem;
    padding: 0.3rem;
    border-radius: 5px;
    background-color: #799e9f;
    color: white;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 0.5rem;
    border: none;
    border-radius: 5px;
    background-color: #799e9f;
    color: white;
  }

  button {
    padding: 2px;
    border-radius: 10px;
    border: none;
    width: 8rem;
    margin: 0.3rem;
    background-color: #83b799;
    color: white;
  }
`

const ContactForm = () => {
  return (
    <FormStyles>
      <form data-netlify="true" method="post">
        <input type="text" name="name" placeholder="Name" />

        <input type="email" name="email" placeholder="Email" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="What's on your mind?" />
        <button type="submit">Submit</button>
        <button type="reset">Wait I Goofed!</button>
      </form>
    </FormStyles>
  )
}

export default ContactForm
