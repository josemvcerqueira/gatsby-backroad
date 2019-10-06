import styled from "styled-components"

export const AboutSection = styled.section`
  padding: 4rem 0;
  .about-center {
    width: 80vw;
    margin: 0 auto;
  }
  .about-img {
    margin: 3rem 0;
  }
  .about-info {
    margin-top: 3rem;
  }
  .about-img {
    position: relative;
  }

  .about-img img {
    width: 100%;
    display: block;
    box-shadow: ${props => props.theme.lightShadow};
  }
  .about-img div {
    box-shadow: ${props => props.theme.lightShadow};
  }
  .about-info h4 {
    font-size: 1.9rem;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
    .about-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      align-items: center;
      margin-top: 3rem;
    }

    .about-img,
    .about-info {
      margin: 0;
    }
    .about-img img {
      max-height: 500px;
    }
    .img-container {
      max-height: 500px;
    }
    .about-info p {
      width: 80%;
    }
  }
  @media (min-width: 992px) {
    .img-container::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid ${props => props.theme.primaryColor};
      box-sizing: border-box;
      top: -16px;
      left: -16px;
      z-index: -1;
    }
  }

  @media (min-width: 1200px) {
    .about-center {
      width: 95vw;
      max-width: 1170px;
    }
  }
`
