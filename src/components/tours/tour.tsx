import React, { FC } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import { FaMap } from "react-icons/fa"

import { Tour as ITour } from "../../constants/interfaces"
import { TourArticle } from "./tours.styles"

interface Props {
  tour: ITour
}

const getDefaultImage = graphql`
  query {
    defaultImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Tour: FC<Props> = ({
  tour: { name, price, country, days, slug, images },
}) => {
  const response = useStaticQuery(getDefaultImage)
  const img = (((response || {}).defaultImage || {}).childImageSharp || {})
    .fluid

  let mainImage = images ? ((images || [])[0] || []).fluid : img

  return (
    <TourArticle>
      <div className="img-container">
        <GatsbyImage fluid={mainImage} className="img" alt="single tour" />
        <AniLink fade className="link" to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className="footer">
        <h3>{name || "default name"}</h3>
        <div className="info">
          <h4 className="country">
            <FaMap className="icon" />
            {country || "default country"}
          </h4>
          <div className="details">
            <h6>{days || "default days"} days</h6>
            <h6>from ${price || "default price"}</h6>
          </div>
        </div>
      </div>
    </TourArticle>
  )
}

export default Tour
