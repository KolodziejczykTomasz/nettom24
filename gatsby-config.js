module.exports = {
  siteMetadata: {
    title: `NETTOM24`,
    description: `Firma NETTOM24 zaprasza`,
    author: `@nettom24`,
    siteUrl: `https://nettom24.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
