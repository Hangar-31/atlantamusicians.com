const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const PageBuilderTemplate = path.resolve('src/templates/PageBuilder.js');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path !== null) {
      createPage({
        path: node.frontmatter.path,
        component: PageBuilderTemplate,
        context: {}, // additional data can be passed via context
      });
    }
  });
};


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      path: String
      sections: [Sections]
    }
    type Sections {
      type: String
      list: [ListItem]
      title: String
      text: String
      image: String
      alt_text: String
      image_right: Boolean
      link_text: String
      link_url: String
      background_color_toggle: Boolean
    }
    type ListItem {
      image: String
      alt_text: String
      title: String
      text: String
      link_text: String
      link_url: String
      background_color_toggle: Boolean
    }
  `;
  createTypes(typeDefs);
};
