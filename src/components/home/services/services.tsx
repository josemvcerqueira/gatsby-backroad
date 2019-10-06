import React, { FC } from "react"

import Title from "../../title/title"
import services from "../../../constants/services"
import { ServiceSection } from "./services.styles"

interface Props {}

const Services: FC<Props> = () => (
  <ServiceSection>
    <Title title="our" subtitle="services" />
    <div className="center">
      {services.map(service => (
        <article key={service.title} className="service">
          <span>{service.icon}</span>
          <h4>{service.title}</h4>
          <p>{service.text}</p>
        </article>
      ))}
    </div>
  </ServiceSection>
)

export default Services
