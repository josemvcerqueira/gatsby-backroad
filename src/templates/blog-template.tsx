import React, { FC } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Layout } from "../components"
import { GenericObj, Post } from "../constants/interfaces"

const BlogSection = styled.section`
  padding: 4rem 0;
  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  .links {
    width: 80vw;
    margin: 0 auto 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.mainSpacing};
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.mainWhite};
    border: 2px solid ${props => props.theme.primaryColor};
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
    :hover {
      background: transparent;
      color: ${props => props.theme.primaryColor};
    }
  }
  .active {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.primaryColor};
  }

  @media screen and (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
    .links {
      width: 60vw;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
  .rich {
    color: ${props => props.theme.primaryColor};
  }
`

interface Data {
  post: Post
}

interface Props {
  data: Data
}

const BlogScreen: FC<Props> = ({
  data: {
    post: {
      text: { json },
      title,
      published,
    },
  },
}) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node: GenericObj) => {
        return (
          <div className="rich">
            <h3>this is awesome image</h3>
            <img
              width="400"
              src={node.data.target.fields.file["en-US"].url}
              alt="post image"
            />
            <p>images provided by jmvc</p>
          </div>
        )
      },
      "embedded-entry-inline": (node: GenericObj) => {
        const { image, title } = node.data.target.fields
        return (
          <>
            this is other post : {title["en-US"]}
            <img
              width="400"
              src={image["en-US"].fields.file["en-US"].url}
              alt="other blog image"
            />
          </>
        )
      },
    },
  }

  return (
    <Layout>
      <BlogSection>
        <div className="center">
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className="post">
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </BlogSection>
    </Layout>
  )
}

export default BlogScreen

export const query = graphql`
  query getPost($slug: String) {
    post: contentfulPosts(slug: { eq: $slug }) {
      title
      published
      text {
        json
      }
    }
  }
`
