const path = require("path");

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

module.exports = {
  siteMetadata: {
    title: "NETTOM24",
    description: "Firma NETTOM24 zaprasza",
    author: "@nettom24",
    siteUrl: "https://nettom24.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },    
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",  
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join(__dirname, "src", "assets"),
        components: path.join(__dirname, "src", "components"),
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["montserrat:300,500,700", "cormorant garamond:500"],
        display: "swap",
      },
    },
  ],
};
