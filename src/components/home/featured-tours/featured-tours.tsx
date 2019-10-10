import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Title from "../../title/title"
import Tour from "../../tours/tour"
import { ToursSection } from "../../styles"
import { Tour as ITour } from "../../../constants/interfaces"

interface Props {}

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTours(filter: { featured: { eq: true } }) {
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedTours: FC<Props> = () => {
  const response = useStaticQuery(getFeaturedTours)
  const tours = response.featuredTours.edges

  return (
    <ToursSection>
      <Title title="featured" subtitle="tours" />
      <div className="center">
        {tours.map(
          ({ node }: Node): JSX.Element => (
            <Tour key={node.contentful_id} tour={node} />
          )
        )}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </ToursSection>
  )
}

interface Node {
  node: ITour
}

export default FeaturedTours
