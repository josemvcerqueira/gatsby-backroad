import React, { FC, ReactNode } from "react"
import { ThemeProvider } from "styled-components"

import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

import { theme, GlobalStyle } from "./layout.styles"

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default Layout
