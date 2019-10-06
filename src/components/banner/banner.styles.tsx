import styled from "styled-components"

export const BannerContainer = styled.div`
  text-align: center;
  letter-spacing: ${props => props.theme.mainSpacing};
  color: ${props => props.theme.mainWhite};
  h1 {
    font-size: 3.3rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
  }
  p {
    width: 85%;
    margin: 0 auto 2rem;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 4.5rem;
    }
    p {
      width: 70%;
    }
  }
`
