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
