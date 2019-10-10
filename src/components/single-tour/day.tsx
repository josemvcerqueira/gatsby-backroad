import React, { FC, useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa"

import { DayArticle } from "./single-tour.styles"

interface Props {
  day: string
  info: string
}

const Day: FC<Props> = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  const toggleInfo = () => {
    setShowInfo(prevState => !prevState)
  }

  return (
    <DayArticle>
      <h4>
        {day}
        <button onClick={toggleInfo} className="btn">
          {showInfo ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </DayArticle>
  )
}

export default Day
