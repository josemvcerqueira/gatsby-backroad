import React, { FC, ReactNode } from "react"

import { BannerContainer } from "./banner.styles"

interface Props {
  title: string
  info?: string
  children?: ReactNode | null
}

const Banner: FC<Props> = ({ title, info, children = null }) => (
  <BannerContainer>
    <h1>{title}</h1>
    {info && <p>{info}</p>}
    {children && children}
  </BannerContainer>
)

export default Banner
