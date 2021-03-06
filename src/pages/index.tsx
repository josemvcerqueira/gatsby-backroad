import React, { FC } from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  Layout,
  Hero,
  Banner,
  About,
  Services,
  FeaturedTours,
  SEO,
} from "../components"
import { GenericObj } from "../constants/interfaces"

interface Props {
  data: GenericObj
}

const Home: FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Home" description="this is description" />
    <Hero
      home
      img={(((data || {}).defaultBcg || {}).childImageSharp || {}).fluid}
    >
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nemo?"
      >
        <AniLink fade className="btn-white" to="/tours">
          explore tours
        </AniLink>
      </Banner>
    </Hero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export default Home

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
