import React, { FC } from "react"
import { graphql } from "gatsby"

import { Layout, Hero } from "../components"
import { GenericObj } from "../constants/interfaces"

interface Props {
  data: GenericObj
}

const Tours: FC<Props> = ({ data }) => (
  <Layout>
    <Hero img={data.defaultBcg.childImageSharp.fluid} />
  </Layout>
)

export default Tours

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
