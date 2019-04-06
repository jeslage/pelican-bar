module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Pelican Bar',
        short_name: 'Pelican',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone'
        // icon: `src/images/icon.png`, // This path is relative to the root of the site.
        // include_favicon: true // Include favicon
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ]
};
