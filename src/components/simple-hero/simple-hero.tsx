import React, { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

const SimpleHero: FC<Props> = ({ children }) => (
  <header className="defaultHero">{children}</header>
)

export default SimpleHero
