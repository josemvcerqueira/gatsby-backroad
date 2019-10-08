import React, { FC } from "react"
import { graphql } from "gatsby"

import { Layout, Hero } from "../components"
import { GenericObj } from "../constants/interfaces"

interface Props {
  data: GenericObj
}

const Blog: FC<Props> = ({ data }) => (
  <Layout>
    <Hero img={data.blogBcg.childImageSharp.fluid} />
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
