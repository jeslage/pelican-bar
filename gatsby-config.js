module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
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
        display: 'standalone',
        icon: `static/icon.png`, // This path is relative to the root of the site.
        include_favicon: true // Include favicon
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1120,
              backgroundColor: 'transparent'
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    }
  ]
};
