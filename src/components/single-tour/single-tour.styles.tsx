import styled from "styled-components"

export const DayArticle = styled.article`
  margin: 2rem 0;
  h4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .btn {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .btn svg {
    font-size: 1.5rem;
    color: ${props => props.theme.primaryColor};
  }
  p {
    line-height: 2;
    transition: ${props => props.theme.mainTransition};
  }
  @media screen and (min-width: 992px) {
    h4 {
      width: 400px;
    }
  }
`
