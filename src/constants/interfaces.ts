import { FluidObject } from "gatsby-image"

export interface IFluidObject {
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
  base64?: string
  tracedSVG?: string
  srcWebp?: string
  srcSetWebp?: string
  media?: string
}

export interface GenericObj {
  [key: string]: any
}

export interface Tour {
  contentful_id?: string
  name?: string
  price?: string
  slug?: string
  country?: string
  days?: string
  images?: Array<Image>
}

interface Image {
  fluid: FluidObject
}
