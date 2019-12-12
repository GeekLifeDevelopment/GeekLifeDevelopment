import styled from "styled-components"

export const MainNavBarStyles = styled.div`
  #navbar-container {
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
    align-items: center;

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
  }
`
