import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    primaryColor: string
    mainWhite: string
    offWhite: string
    mainBlack: string
    mainGrey: string
    darkGrey: string
    mainTransition: string
    mainSpacing: string
    lightShadow: string
    darkShadow: string
  }
}
