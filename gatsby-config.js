module.exports = {
  siteMetadata: {
    title: 'Hangar 31 Website',
    description: 'This site was created by Hangar 31 LLC.',
    author: '@hangar-31',
    siteUrl: 'https://hangar31.dev',
  },
  plugins: [
    // Gives additional image processing functions
    'gatsby-plugin-sharp',
    // Creates ImageSharp nodes for image manipulation within GraphQL queries
    'gatsby-transformer-sharp',
    // Create ImageSharp nodes from markdown images
    'gatsby-transformer-remark',

    // File Sourcing
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/assets`,
      },
    },

    // Manifest
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/hangar-31-logo-black-icon.png',
      },
    },
    // React Helmet
    'gatsby-plugin-react-helmet',

    // Emotion plugin for Gatsby
    'gatsby-plugin-emotion',

    // Netlify
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',

    // Robots TXT
    'gatsby-plugin-robots-txt',

    // Creates a Service Worker for offline use
    'gatsby-plugin-offline',

    // Allows the use of react-helmet within Gatsby
    'gatsby-plugin-react-helmet',

    // Gatsby Plugin for linting -- Using AirBNB
    'gatsby-plugin-eslint',

    // Remove the trailing slashes from pathing
    'gatsby-plugin-remove-trailing-slashes',

    // Netlify CMS
    'gatsby-plugin-netlify-cms',
  ],
};
