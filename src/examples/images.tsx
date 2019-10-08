import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"

import img from "../images/connectBcg.jpeg"

const getImages = graphql`
  query Images {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="basic image" className="basic" />
      </article>
      <article>
        <h3>fixed image/blue</h3>
        <GatsbyImage fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <GatsbyImage fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  )
}

export default Images

const Wrapper = styled.div`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 3px solid red;
    padding: 1rem;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
