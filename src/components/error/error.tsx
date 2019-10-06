import React, { FC } from "react"
import { Link } from "gatsby"

import { Header } from "./error.styles"
import Banner from "../banner/banner"

interface Props {}

const Error: FC<Props> = () => (
  <Header>
    <Banner title="oops it's a dead end">
      <Link to="/" className="btn-white">
        back to home page
      </Link>
    </Banner>
  </Header>
)

export default Error
