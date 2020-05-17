module.exports = {
  siteMetadata: {
    title: `isthereacovidcureyet`,
    description: `get latest updates on the cure of COVID-19`,
    author: `@raoufswe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `react-elastic-carousel`,
    `react-media`,
    `react-slick`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `isthereacovidcureyet`,
        short_name: `isthereacovidcureyet`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
