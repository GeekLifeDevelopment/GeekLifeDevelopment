module.exports = {
  siteMetadata: {
    title: "Geek Life Development",
    description: "Geek Life Development",
    author: "Jason Sorenson",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styled-components",
      options: {},
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
