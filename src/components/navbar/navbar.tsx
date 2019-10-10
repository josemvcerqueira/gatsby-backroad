import React, { FC, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
  Navbar,
  NavCenter,
  NavHeader,
  LogoBtn,
  AlignRight,
  NavbarList,
  SocialLinks,
} from "./navbar.styles"

import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"
import logo from "../../images/logo.svg"

interface Props {}

const NavbarComponent: FC<Props> = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => setNav(prevState => !prevState)

  return (
    <Navbar>
      <NavCenter>
        <NavHeader>
          <img src={logo} alt="backroads logo" />
          <LogoBtn type="button" onClick={toggleNav}>
            <AlignRight />
          </LogoBtn>
        </NavHeader>
        <NavbarList isOpen={isOpen}>
          {links.map(link => (
            <li key={link.text}>
              <AniLink fade to={link.path}>
                {link.text}
              </AniLink>
            </li>
          ))}
        </NavbarList>
        <SocialLinks>
          {socialIcons.map(icon => (
            <a
              key={icon.url}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </SocialLinks>
      </NavCenter>
    </Navbar>
  )
}

export default NavbarComponent
