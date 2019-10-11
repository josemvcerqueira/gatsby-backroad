import React, { FC } from "react"
import { graphql } from "gatsby"
import GatsbyImage from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { Layout, Hero, Day, SEO } from "../components"
import { Tour } from "../constants/interfaces"

interface Data {
  tour: Tour
}

interface Props {
  data: Data
}

const TemplateSection = styled.section`
  padding: 4rem 0;
  .center {
    width: 80vw;
    margin: 0 auto;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }
  .image {
    box-shadow: ${props => props.theme.lightShadow};
  }
  h2 {
    text-transform: capitalize;
    letter-spacing: ${props => props.theme.mainSpacing};
    margin-bottom: 1rem;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
  }
  .info p {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    text-transform: capitalize;
  }
  .icon {
    color: ${props => props.theme.primaryColor};
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }
  .desc {
    line-height: 2;
  }
  h4 {
    text-transform: capitalize;
  }
  h2 {
    margin: 2rem 0;
  }
  .journey {
    margin: 3rem 0;
  }
  @media screen and (min-width: 992px) {
    .journey,
    .desc {
      width: 70vw;
    }
  }
  @media screen and (min-width: 1200px) {
    .center {
      width: 95vw;
      max-width: 1170vw;
    }
    .images {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
      grid-column-gap: 50px;
    }
  }
`

const Template: FC<Props> = ({
  data: {
    tour: {
      name,
      price,
      country,
      days,
      description: { description },
      images: [mainImage, ...restImages],
      journey,
      start,
    },
  },
}) => {
  return (
    <Layout>
      <SEO title={name || "Tour"} />
      <Hero img={mainImage.fluid} />
      <TemplateSection>
        <div className="center">
          <div className="images">
            {restImages.map((image, index) => (
              <GatsbyImage
                key={index}
                fluid={image.fluid}
                alt="single image tour"
                className="image"
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className="info">
            <p>
              <FaMoneyBillWave className="icon" />
              starting from ${price}
            </p>
            <p>
              <FaMap className="icon" />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days}</h4>
          <p className="desc">{description}</p>
          <h2>daily schedule</h2>
          <div className="journey">
            {journey.map((day, index) => (
              <Day key={index} day={day.day} info={day.info} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </TemplateSection>
    </Layout>
  )
}

export default Template

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTours(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
