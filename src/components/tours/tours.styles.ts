import styled from "styled-components"

export const TourArticle = styled.article`
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};
  :hover {
    box-shadow: ${props => props.theme.darkShadow};
    cursor: pointer;
  }
  .img-container {
    position: relative;
    background: ${props => props.theme.primaryColor};
    transition: ${props => props.theme.mainTransition};
  }
  .img {
    transition: ${props => props.theme.mainTransition};
  }
  .img-container:hover .img {
    opacity: 0.3;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.mainSpacing};
    color: ${props => props.theme.mainWhite};
    border: 2px solid ${props => props.theme.mainWhite};
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
  }
  .link:hover {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.primaryColor};
  }
  .img-container:hover .link {
    opacity: 1;
  }

  .footer {
    padding: 1rem;
    text-align: left;
  }
  .footer h3 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    margin-top: 0.5rem;
  }
  .info h6,
  .info h4 {
    margin-bottom: 0;
  }
  .country {
    text-transform: capitalize;
    color: ${props => props.theme.primaryColor};
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 0.4rem;
  }
  .details {
    color: ${props => props.theme.darkGrey};
    text-transform: uppercase;
    text-align: right;
  }
`
