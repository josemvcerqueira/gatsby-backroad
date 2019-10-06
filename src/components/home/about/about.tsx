import React from "react"

import Title from "../../title/title"
import img from "../../../images/defaultBcg.jpeg"

import { AboutSection } from "./about.styles"

const About = () => (
  <AboutSection>
    <Title title="about" subtitle="us" />
    <div className="about-center">
      <article className="about-img">
        <div className="img-container">
          <img src={img} alt="about company" />
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

export default About
