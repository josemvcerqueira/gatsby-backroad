import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"

import Title from "../../title/title"

import { AboutSection } from "./about.styles"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <AboutSection>
      <Title title="about" subtitle="us" />
      <div className="about-center">
        <article className="about-img">
          <div className="img-container">
            <GatsbyImage
              fluid={aboutImage.childImageSharp.fluid}
              alt="awesome landscape"
            />
          </div>
        </article>
        <article className="about-info">
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            est itaque sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            est itaque sint.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </AboutSection>
  )
}

export default About
