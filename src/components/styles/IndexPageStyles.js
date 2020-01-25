import styled from "styled-components"

export const IndexPageStyles = styled.div`
  #hero-image-container {
    position: relative;
    #overlay {
      position: absolute;
      top: 0;
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      height: 100vh;
    }
    #image-container {
      img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
    }

    #hero-logo-container {
      position: absolute;
      top: 30%;
      left: 50%;
      margin-left: -252.5px;
      z-index: 3;

      @media (max-width: 675px) {
        margin-left: -175px;
        top: 25%;
      }

      img {
        width: 550px;
        margin: 0%;

        @media (max-width: 675px) {
          width: 350px;
        }
      }

      #code-logos {
        text-align: center;
        i {
          font-size: 3.5em;
          padding: 0 1rem;
        }
      }
    }
  }

  #about-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    img {
      border-radius: 50%;
      margin: 0.5rem;

      @media (max-width: 580px) {
        width: 350px;
      }
    }

    #about-text {
      width: 50%;
      align-self: center;

      @media (max-width: 580px) {
      }
    }

    @media (max-width: 580px) {
      grid-template-columns: 100%;
    }
  }
`
