import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ post }) => {
  SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool
  }
  SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false
  }
  const query = graphql`
  query SEO {
    site {
      siteMetadata {
        url: url
        image: image
      }
    }
  }
`

  const { site } = useStaticQuery(query)
  const { title, description, url, image } = site.siteMetadata

  const seo = {
    image: `${url}${image}`,
    url: url
  }
  return (
    <Helmet title={seo.title}>
      {seo.image && <meta name="twitter:image" content={seo.image}/>}
    </Helmet>
  )
}
export default SEO
