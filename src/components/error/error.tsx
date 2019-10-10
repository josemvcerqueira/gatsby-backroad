import React, { FC } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Header } from "./error.styles"
import Banner from "../banner/banner"

interface Props {}

const Error: FC<Props> = () => (
  <Header>
    <Banner title="oops it's a dead end">
      <AniLink fade to="/" className="btn-white">
        back to home page
      </AniLink>
    </Banner>
  </Header>
)

export default Error
