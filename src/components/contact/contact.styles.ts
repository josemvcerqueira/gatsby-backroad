import styled from "styled-components"

export const ContactSection = styled.section`
  padding: 4rem 0;
  .center {
    width: 80vw;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .center {
      width: 50vw;
      margin: 0 auto;
    }
  }
  label {
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
  }
  .formControl,
  .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid ${props => props.theme.darkGrey};
    border-radius: 0.25rem;
  }
  .submit {
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    color: ${props => props.theme.mainBlack};
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
  }
  .submit:hover {
    background: ${props => props.theme.darkGrey};
    color: ${props => props.theme.mainWhite};
    border-color: ${props => props.theme.darkGrey};
  }
`
