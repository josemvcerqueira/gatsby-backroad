import styled from "styled-components"

export const FooterContainer = styled.footer`
  margin-top: auto;
  background: ${props => props.theme.mainBlack};
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.mainWhite};
`
export const Links = styled.div`
  a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.mainWhite};
    margin: 0.5rem 1rem;
    letter-spacing: ${props => props.theme.mainSpacing};
    transition: ${props => props.theme.mainTransition};
    font-weight: bold;
    :hover {
      color: ${props => props.theme.primaryColor};
    }
  }
`

export const Icons = styled.div`
  a {
    display: inline-block;
    margin: 1rem;
    font-size: 1.3rem;
    color: ${props => props.theme.mainWhite};
    transition: ${props => props.theme.mainTransition};
    :hover {
      color: ${props => props.theme.primaryColor};
    }
  }
`

export const Copyright = styled.div`
  text-transform: capitalize;
  letter-spacing: ${props => props.theme.mainSpacing};
  line-height: 2;
`
