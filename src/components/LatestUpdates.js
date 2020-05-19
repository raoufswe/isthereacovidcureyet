import Swiper from "react-id-swiper"
import React from "react"
import Card from "./Card"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Styled = styled.div`
  margin-top: 1rem;
  .last-updates-title {
    padding: 1.5rem 0;
    font-size: x-large;
  }
`

const LatestUpdates = () => {
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  }

  return (
    <Styled>
      <div className="last-updates-title">Latest updates on the cure</div>
      <div>
        <StaticQuery
          query={graphql`
            query MyQuery {
              __typename
              allMarkdownRemark(
                sort: { order: ASC, fields: frontmatter___date }
              ) {
                edges {
                  node {
                    frontmatter {
                      date(formatString: "MMMM DD, YYYY")
                      path
                      title
                    }
                    html
                  }
                }
              }
            }
          `}
          render={data => {
            return (
              <Swiper {...params}>
                {data.allMarkdownRemark.edges.map((edge, key) => (
                  <div>
                    <Card
                      date={edge.node.frontmatter.date}
                      content={edge.node.html}
                      articalLink={edge.node.frontmatter.path}
                      key={key}
                    />
                  </div>
                ))}
              </Swiper>
            )
          }}
        />
      </div>
    </Styled>
  )
}

export default LatestUpdates
