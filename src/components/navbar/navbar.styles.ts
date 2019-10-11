import styled from "styled-components"
import { FaAlignRight } from "react-icons/fa"

export const Navbar = styled.div`
  @media screen and (min-width: 576px) {
    padding: 0 2rem;
  }
`
export const NavCenter = styled.div`
  @media (min-width: 992px) {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
`

export const LogoBtn = styled.button`
  @media (min-width: 992px) {
    display: none;
  }
  background: transparent;
  border: none;
  outline: none;
  :hover {
    cursor: pointer;
  }
`
export const AlignRight = styled(FaAlignRight)`
  color: ${props => props.theme.primaryColor};
  font-size: 1.5rem;
`
export const NavbarList = styled.ul<{ isOpen: boolean }>`
    @media (min-width: 992px) {
    height: auto;
    display: flex;
     a {
    color: ${props => props.theme.primaryColor};
    margin: 0 0.5rem;
    font-size: 1.2rem;
    transition: ${props => props.theme.mainTransition};
    :hover {
    color: ${props => props.theme.mainBlack} ;
    transform: translateY(-5px);
  }
  }
    }
    
  list-style-type: none;
  transition: ${props => props.theme.mainTransition};
  height: ${props => (props.isOpen ? "280px" : 0)};
  overflow: hidden;
  
  a {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: ${props => props.theme.mainBlack};
    transition: ${props => props.theme.mainTransition};
    font-weight: bold;
    letter-spacing: ${props => props.theme.mainSpacing};
    :hover {
      color: ${props => props.theme.primaryColor};
    }
    }
  }
`

export const SocialLinks = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: flex;
    line-height: 0;
    a {
      color: ${props => props.theme.primaryColor};
      margin: 0 0.5rem;
      font-size: 1.2rem;
      transition: ${props => props.theme.mainTransition};
      :hover {
        color: ${props => props.theme.mainBlack};
        transform: translateY(-5px);
      }
    }
  }
`
