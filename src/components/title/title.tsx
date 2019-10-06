import React, { FC } from "react"

import { TitleWrapper } from "./title.styles"

interface Props {
  title: string
  subtitle: string
}

const Title: FC<Props> = ({ title, subtitle }) => (
  <TitleWrapper>
    <h4>
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </h4>
  </TitleWrapper>
)

export default Title
