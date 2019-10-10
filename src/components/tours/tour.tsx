import React, { FC } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import GatsbyImage from "gatsby-image"
import { FaMap } from "react-icons/fa"

import { Tour as ITour } from "../../constants/interfaces"
import { TourArticle } from "./tour.styles"

interface Props {
  tour: ITour
}

const Tour: FC<Props> = ({
  tour: { name, price, country, days, slug, images },
}) => {
  let mainImage = (images || [])[0].fluid
  return (
    <TourArticle>
      <div className="img-container">
        <GatsbyImage fluid={mainImage} className="img" alt="single tour" />
        <AniLink fade className="link" to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className="footer">
        <h3>{name}</h3>
        <div className="info">
          <h4 className="country">
            <FaMap className="icon" />
            {country}
          </h4>
          <div className="details">
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </TourArticle>
  )
}

export default Tour
