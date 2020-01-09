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
      top: 20%;
      left: 50%;
      margin-left: -252.5px;
      z-index: 3;

      img {
        width: 550px;
        margin: 0%;
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
`
