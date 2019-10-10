import React, { FC } from "react"

import Title from "../title/title"

import { ContactSection } from "./contact.styles"

interface Props {}

const Contact: FC<Props> = () => {
  return (
    <ContactSection>
      <Title title="contact" subtitle="us" />
      <div className="center">
        <form
          action="https://formspree.io/mveqzrkx"
          method="POST"
          className="form"
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="formControl"
              placeholder="Jose Cerqueira"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="formControl"
              placeholder="jose@josecerqueira.com"
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              className="formControl"
              placeholder="hello there"
            />
          </div>
          <div>
            <input type="submit" value="submit here" className="submit" />
          </div>
        </form>
      </div>
    </ContactSection>
  )
}

export default Contact
