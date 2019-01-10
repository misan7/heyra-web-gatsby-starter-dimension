module.exports = {
  siteMetadata: {
    title: "Heyra App",
    author: "Sergio MT",
    description: "Heyra website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg-images/
        }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}