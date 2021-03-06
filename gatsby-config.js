module.exports = {
  siteMetadata: {
    title: `Is there a cure for COVID yet?`,
    description: `Get latest updates on the cure of COVID-19`,
    author: `@Maadh, @Raouf, @Satwik`,
    url: "https://www.isthereacovidcureyet.com",
    image: "/images/isthereacure.png",
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-webpack-bundle-analyzer`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `@bumped-inc/gatsby-plugin-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154471496-1",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `updates`,
        path: `${__dirname}/updates`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `isthereaCOVIDcureyet`,
        short_name: `isthereaCOVIDcureyet`,
        start_url: `/`,
        background_color: `#2b2e44`,
        theme_color: `#2b2e44`,
        display: `minimal-ui`,
        icon: `src/images/circular_icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`md`, `mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
