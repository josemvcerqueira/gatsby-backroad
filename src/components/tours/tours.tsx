import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

const getAllTours = graphql`
  query {
    tours: allContentfulTours {
      edges {
        node {
          contentful_id
          name
          price
          slug
          country
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

import TourList from "./tour-list"

interface Props {}

const Tours: FC<Props> = () => {
  const { tours } = useStaticQuery(getAllTours)
  return <TourList tours={tours} />
}

export default Tours
