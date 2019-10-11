import React, { FC } from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Layout, BlogCard, Title } from "../components"
import { BlogSection } from "../components/blog/blog.styles"
import { Post } from "../constants/interfaces"

interface Node {
  node: Post
}

interface Data {
  posts: { edges: Array<Node> }
}

interface PageContext {
  currentPage: number
  numPages: number
}

interface Props {
  data: Data
  pageContext: PageContext
}

const BlogTemplate: FC<Props> = ({
  data,
  pageContext: { currentPage, numPages },
}) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  return (
    <Layout>
      <BlogSection>
        <Title title="latest" subtitle="posts" />
        <div className="center">
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.contentful_id} blog={node} />
          ))}
        </div>
        <section className="links">
          {!isFirst && (
            <AniLink fade to={prevPage} className="link">
              Prev
            </AniLink>
          )}
          {Array.from({ length: numPages }, (_, index) => (
            <AniLink
              key={index}
              fade
              to={`/blogs/${index === 0 ? "" : index + 1}`}
              className={index + 1 === currentPage ? "link active" : "link"}
            >
              {index + 1}
            </AniLink>
          ))}
          {!isLast && (
            <AniLink fade to={nextPage} className="link">
              Next
            </AniLink>
          )}
        </section>
      </BlogSection>
    </Layout>
  )
}

export default BlogTemplate

export const query = graphql`
  query getPosts($skip: Int, $limit: Int) {
    posts: allContentfulPosts(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          contentful_id
          published(formatString: "MMMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
