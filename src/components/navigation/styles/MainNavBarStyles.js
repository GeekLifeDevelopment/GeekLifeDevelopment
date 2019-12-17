import styled from "styled-components"

export const MainNavBarStyles = styled.div`
  #navbar-container {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    align-items: center;
    background-color: #83b799;
    color: whitesmoke;

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
    }

    ul {
      list-style-type: none;
      display: flex;
      margin: 0;
      justify-self: center;

      li {
        margin: 0;
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
