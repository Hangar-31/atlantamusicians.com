module.exports = {
  siteMetadata: {
    title: 'Hangar 31 Website',
    description: 'This site was created by Hangar 31 LLC.',
    author: '@hangar-31',
    siteUrl: 'https://hangar31.dev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
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

    // Creates ImageSharp nodes for image manipulation within GraphQL queries
    'gatsby-transformer-sharp',

    // Transition linking between pages
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        injectPageProps: false,
      },
    },

    // Gives additional image processing functions
    'gatsby-plugin-sharp',

    // Gatsby Plugin for linting -- Using AirBNB
    'gatsby-plugin-eslint',

    // Remove the trailing slashes from pathing
    'gatsby-plugin-remove-trailing-slashes',

    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
  ],
};
