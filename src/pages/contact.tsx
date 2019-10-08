import React, { FC } from "react"
import { graphql } from "gatsby"

import { Layout, Hero } from "../components"
import { GenericObj } from "../constants/interfaces"

interface Props {
  data: GenericObj
}

const Contact: FC<Props> = ({ data }) => (
  <Layout>
    <Hero img={data.connectBcg.childImageSharp.fluid} />
  </Layout>
)

export default Contact

export const query = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
