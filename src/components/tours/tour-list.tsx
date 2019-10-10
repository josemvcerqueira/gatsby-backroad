import React, { FC, useState, useEffect } from "react"

import { Node } from "../../constants/interfaces"
import { ToursSection } from "../styles"
import Title from "../title/title"

import Tour from "./tour"

interface Props {
  tours: Edges
}

interface Edges {
  edges: Array<Node>
}

const TourList: FC<Props> = ({ tours }) => {
  const [sortedTours, setSortedTours] = useState<Array<Node>>([])

  useEffect(() => {
    setSortedTours(tours.edges)
  }, [])

  return (
    <ToursSection>
      <Title title="our" subtitle="tours" />
      <div className="center">
        {sortedTours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
    </ToursSection>
  )
}

export default TourList
