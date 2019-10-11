import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Title from "../title/title"
import { Post } from "../../constants/interfaces"

import BlogCard from "./blog-card"
import { BlogSection } from "./blog.styles"

const getBlogPosts = graphql`
  query {
    posts: allContentfulPosts(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM Do, YYYY")
          title
          slug
          contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

interface Props {}

const BlogList: FC<Props> = () => {
  const { posts } = useStaticQuery(getBlogPosts)
  return (
    <BlogSection>
      <Title title="our" subtitle="blogs" />
      <div className="center">
        {posts.edges.map(({ node }: Node) => (
          <BlogCard key={node.contentful_id} blog={node} />
        ))}
      </div>
    </BlogSection>
  )
}

export default BlogList

interface Node {
  node: Post
}
