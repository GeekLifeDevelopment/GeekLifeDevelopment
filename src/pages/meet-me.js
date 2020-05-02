import React from "react"
import Layout from "../components/Layout"
import ProfileImage from "../images/jasonandbecky.jpg"
import styled from "styled-components"

const MeetMeStyles = styled.div`
  .content-container {
    padding: 3rem;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    margin-top: 4rem;

    @media (max-width: 600px) {
      grid-template-columns: 100%;
    }
  }
  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;

    @media (max-width: 430px) {
      width: 320px;
      height: 320px;
    }
  }
`

const MeetMePage = () => {
  return (
    <Layout>
      <MeetMeStyles>
        <div className="content-container">
          <img src={ProfileImage} alt="" />
          <p>
            Lorem ipsum dolor amet air plant wayfarers ugh tbh, master cleanse
            selvage asymmetrical shaman blue bottle keytar VHS lumbersexual.
            Quinoa enamel pin intelligentsia schlitz roof party occupy. Man bun
            copper mug unicorn, kale chips put a bird on it palo santo before
            they sold out. Asymmetrical seitan meditation palo santo bitters.
            chips put a bird on it palo santo before they sold out. Asymmetrical
            seitan meditation palo santo bitters.chips put a bird on it palo
            santo before they sold out. Asymmetrical seitan meditation palo
            santo bitters.chips put a bird on it palo santo before they sold
            out. Asymmetrical seitan meditation palo santo bitters.chips put a
            bird on it palo santo before they sold out. Asymmetrical seitan
            meditation palo santo bitters.chips put a bird on it palo santo
            before they sold out. Asymmetrical seitan meditation palo santo
            bitters.
          </p>
        </div>
      </MeetMeStyles>
    </Layout>
  )
}

export default MeetMePage
