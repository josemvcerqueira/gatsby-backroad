import styled from "styled-components"

export const ToursSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  @media screen and (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`
