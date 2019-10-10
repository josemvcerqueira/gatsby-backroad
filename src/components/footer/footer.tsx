import React, { FC } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Links, FooterContainer, Icons, Copyright } from "./footer.styles"
import links from "../../constants/links"
import socialIcons from "../../constants/social-icons"

interface Props {}

const Footer: FC<Props> = () => {
  return (
    <FooterContainer>
      <Links>
        {links.map(link => (
          <AniLink fade key={link.path} to={link.path}>
            {link.text}
          </AniLink>
        ))}
      </Links>
      <Icons>
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
      </Icons>
      <Copyright>
        copyright &copy; backroads travel company {new Date().getFullYear()} all
        rights reserved
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
