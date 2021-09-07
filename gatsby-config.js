// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    siteUrl: 'https://gatsbysandboxmain32267.gatsbyjs.io',
    title: 'Gatsby Sandbox',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/blog/`
      }
    }
  ]
};
