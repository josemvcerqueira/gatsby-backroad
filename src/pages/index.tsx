import React, { FC } from "react"
import { Link, graphql } from "gatsby"

import { Layout, Hero, Banner, About, Services } from "../components"
import { GenericObj } from "../constants/interfaces"

interface Props {
  data: GenericObj
}

const Home: FC<Props> = ({ data }) => (
  <Layout>
    <Hero home img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, nemo?"
      >
        <Link className="btn-white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </Hero>
    <About />
    <Services />
  </Layout>
)

export default Home

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
