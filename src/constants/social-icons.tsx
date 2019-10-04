import React, { ReactNode } from "react"
import { FaFacebook, FaTwitterSquare, FaSquarespace } from "react-icons/fa"

export default [
  {
    icon: <FaFacebook />,
    url: "https://facebook.com",
  },
  {
    icon: <FaTwitterSquare />,
    url: "https://twitter.com",
  },
  {
    icon: <FaSquarespace />,
    url: "https://www.squarespace.com",
  },
] as ReadonlyArray<LinkObj>

interface LinkObj {
  icon: ReactNode
  url: string
}
