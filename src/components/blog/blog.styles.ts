import styled from "styled-components"

export const BlogSection = styled.section`
  padding: 4rem 0;
  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  .links {
    width: 80vw;
    margin: 0 auto 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.mainSpacing};
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.mainWhite};
    border: 2px solid ${props => props.theme.primaryColor};
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
  }
  .link:hover {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.primaryColor};
  }
  .active {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.primaryColor};
  }

  @media screen and (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
    .links {
      width: 60vw;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`

export const BlogArticle = styled.article`
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};

  :hover {
    box-shadow: ${props => props.theme.darkShadow};
  }

  .img-container {
    position: relative;
    background: ${props => props.theme.primaryColor};
    transition: ${props => props.theme.mainTransition};
    :hover .img {
      opacity: 0.3;
    }
    :hover .link {
      opacity: 1;
    }
  }
  .img {
    transition: ${props => props.theme.mainTransition};
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
    background-color: transparent;
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
    :hover {
      background: ${props => props.theme.mainWhite};
      color: ${props => props.theme.primaryColor};
    }
  }

  .footer {
    padding: 1rem;
    text-align: left;
    h4 {
      text-transform: capitalize;
      margin-bottom: 0;
    }
  }

  .date {
    position: absolute;
    left: 0;
    top: 75%;
    background: ${props => props.theme.primaryColor};
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`
