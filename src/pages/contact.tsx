import React, { FC } from "react"
import { graphql } from "gatsby"

import { Layout, Hero, Contact } from "../components"
import { GenericObj } from "../constants/interfaces"

interface Props {
  data: GenericObj
}

const ContactScreen: FC<Props> = ({ data }) => (
  <Layout>
    <Hero img={data.connectBcg.childImageSharp.fluid} />
    <Contact />
  </Layout>
)

export default ContactScreen

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
