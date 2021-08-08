require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.northwestarkansasdaily.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.northwestarkansasdaily.com',
        sitemap: 'https://www.northwestarkansasdaily.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL ? "https://nwadailybackend.herokuapp.com": "https://nwadailybackend.herokuapp.com",
        contentTypes: ["article", "job", "category", "writer","sponsor","edition","post","pick"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 5000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/gatsby-icon.png`
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-breakpoints",
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "194889605657799",
      },
    },
    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-QXJL9EJDV6",
      },
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.northwestarkansasdaily.com',
        sitemap: 'https://www.northwestarkansasdaily.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      },
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-QXJL9EJDV6", // Google Analytics / GA
        ],
      },
    },
  ],
};