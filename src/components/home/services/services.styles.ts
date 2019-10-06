import styled from "styled-components"

export const ServiceSection = styled.section`
  background: ${props => props.theme.mainGrey};
  padding: 4rem 0;
  .center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
  }
  .service {
    margin: 2rem 0;
    text-align: center;
  }
  .service span {
    background: ${props => props.theme.primaryColor};
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service h4 {
    text-transform: uppercase;
  }
`
