import React, { FC, ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

import { IFluidObject } from "../../constants/interfaces"

interface Props {
  children?: ReactNode
  className?: string
  home?: boolean
  img: IFluidObject
}

export const getDefaultBgImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero: FC<Props> = ({ img, className, home = false, children }) => {
  const response = useStaticQuery(getDefaultBgImage)
  let backgroundImage =
    img || (((response || {}).defaultBcg || {}).childImageSharp || {}).fluid

  return (
    // @ts-ignore
    <BackgroundImage className={className} fluid={backgroundImage} home={home}>
      {children && children}
    </BackgroundImage>
  )
}
export default styled(Hero)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
