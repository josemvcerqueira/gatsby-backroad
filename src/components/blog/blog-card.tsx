import React, { FC } from "react"
import GatsbyImage from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Post } from "../../constants/interfaces"

import { BlogArticle } from "./blog.styles"

interface Props {
  blog: Post
}

const BlogCard: FC<Props> = ({ blog: { slug, published, image, title } }) => {
  return (
    <BlogArticle>
      <div className="img-container">
        <GatsbyImage fluid={image.fluid} className="img" alt="single post" />
        <AniLink fade className="link" to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className="date">{published}</h6>
      </div>
      <div className="footer">{title}</div>
    </BlogArticle>
  )
}

export default BlogCard
