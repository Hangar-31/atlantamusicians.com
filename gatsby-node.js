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
