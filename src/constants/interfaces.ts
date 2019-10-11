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
  images: Array<Image>
  start?: string
  description: Description
  journey: Array<Journey>
}

interface Description {
  description: string
}

interface Journey {
  day: string
  info: string
}

interface Image {
  fluid: FluidObject
}

export interface Node {
  node: Tour
}

export interface Post {
  published: string
  title: string
  contentful_id: string
  image: Image
  slug: string
  text: RichText
}

interface RichText {
  json: string
}
