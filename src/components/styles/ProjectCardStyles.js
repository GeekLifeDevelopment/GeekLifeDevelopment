import styled from "styled-components"

export const ProjectCardStyle = styled.div`
  #card-container {
    position: relative;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    border-radius: 10%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  #overlay {
    width: 300px;
    height: 300px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10%;
    z-index: 2;
    /* display: none; */

    &:hover {
      cursor: pointer;
      display: block;
    }
  }

  .overlay-content {
    margin-top: 20%;
    text-align: center;
    color: white;
    transition-duration: 0.3s;

    h1 {
      font-size: 1.5em;
    }
    button {
      width: 100px;
      font-size: 1em;
      padding: 0.3rem;
      color: white;
      background-color: #83b799;

      border: none;
    }
  }
`
