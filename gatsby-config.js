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
        icons: [
          {
            src: `/static/icons/icon-72x72`,
            sizes: `72x72`,
            type: `image/png`
          },
          {
            src: `/static/icons/icon-96x96`,
            sizes: `96x96`,
            type: `image/png`
          },
          {
            src: `/static/icons/icon-128x128`,
            sizes: `128x128`,
            type: `image/png`
          },

          {
            src: `/static/icons/icon-144x144`,
            sizes: `144x144`,
            type: `image/png`
          },
          {
            src: `/static/icons/icon-152x152`,
            sizes: `152x152`,
            type: `image/png`
          },
          {
            src: `/static/icons/icon-192x192`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/static/icons/icon-384x384`,
            sizes: `384x384`,
            type: `image/png`
          },
          {
            src: `/static/icons/icon-512x512`,
            sizes: `512x512`,
            type: `image/png`
          }
        ],
        include_favicon: true
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
