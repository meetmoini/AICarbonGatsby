module.exports = {
  pathPrefix: `/ai-applications/design`,
  siteMetadata: {
    title: 'AI Applications Design',
    description: 'Design resources for a unified product portfolio',
    keywords: 'IBM,AI Applications,Watson IoT,IoT,Design,Carbon',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AI Applications Design`,
        short_name: `AI Applications Design`,
        start_url: `/`,
        background_color: `#f3f3f3`,
        theme_color: `#f3f3f3`,
        display: 'browser',
        legacy: false, // do not add apple-touch-icon links to <head>
        include_favicon: false, // This will exclude favicon link tag
        icon: `./src/images/favicons/favicon-1024x1024-with-padding.png`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        additionalFontWeights: ['200', '200i'],
        repository: {
          baseUrl: 'https://github.ibm.com/ai-applications/design',
          subDirectory: '',
        },
        titleType: 'append',
      },
    },
  ],
};
