import styled from "styled-components"

export const MainNavBarStyles = styled.div`
  #navbar-container {
    position: fixed;
    z-index: 10;
    width: 100%;
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    align-items: center;
    background-color: #83b799;
    color: whitesmoke;
    padding: 0.3rem;

    @media (max-width: 1000px) {
      grid-template-columns: 10% auto 10%;
    }

    #logo-container {
      display: flex;
      align-items: center;

      img {
        margin: 0 0 0 20px;
        width: 50px;
      }
      p {
        padding-left: 0.5rem;
        font-family: "Orbitron", sans-serif;
        margin: 0;
      }
      @media (max-width: 1000px) {
        display: none;
      }
    }

    #logo-container-mobile {
      display: none;
      /* display: flex; */
      align-items: center;
      justify-self: center;

      img {
        margin: 0 0 0 20px;
        width: 50px;
      }
      p {
        padding-left: 0.5rem;
        font-family: "Orbitron", sans-serif;
        margin: 0;
      }
      @media (max-width: 1000px) {
        display: flex;
      }
    }

    #hamburger-logo {
      margin: 0 0 0 20px;
      display: none;

      i {
        font-size: 1.3em;
        align-self: center;
      }

      @media (max-width: 1000px) {
        display: block;
      }
    }

    ul {
      list-style-type: none;
      display: flex;
      margin: 0;
      justify-self: center;

      @media (max-width: 1000px) {
        display: none;
      }

      li {
        margin: 0 0.5rem;
        padding: 0.5rem;
      }
    }

    #social-container {
      justify-self: right;
      padding-right: 1rem;

      .fa-facebook-f {
        &:hover {
          color: #4267b2;
          cursor: pointer;
        }
      }
      .fa-twitter {
        &:hover {
          color: #1da1f2;
          cursor: pointer;
        }
      }
      .fa-linkedin-in {
        &:hover {
          color: #2867b2;
          cursor: pointer;
        }
      }

      .fa-github {
        &:hover {
          color: #000;
          cursor: pointer;
        }
      }
    }
  }
`
