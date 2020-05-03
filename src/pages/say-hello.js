import React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import styled from "styled-components"

const HelloPageStyles = styled.div`
  .content-container {
    margin-top: 6rem;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
  }
`

const SayHelloPage = () => {
  return (
    <Layout>
      <HelloPageStyles>
        <div className="content-container">
          <div className="contact-info">some stuff</div>
          <ContactForm />
        </div>
      </HelloPageStyles>
    </Layout>
  )
}

export default SayHelloPage
