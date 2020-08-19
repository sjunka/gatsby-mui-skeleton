module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
  ],
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby-Skeleton-MUI',
    description: 'Skeleton for gatsby projects',
    keywords: 'gatsby, gatsbyjs project, gatsby mui',
    image: '/static/gatsby.jpg',
    siteUrl: 'http://localhost:8000/',
    url: 'https://www.gatsbyjs.org/',
  },
};
