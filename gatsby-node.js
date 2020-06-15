const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const PageBuilderTemplate = path.resolve('src/templates/PageBuilder.js');
  const BlogTemplate = path.resolve('src/templates/BlogTemplate.js');
  const PressTemplate = path.resolve('src/templates/PressTemplate.js');

  const result = await graphql(`
    {
      allFile {
        nodes {
          sourceInstanceName
          childMarkdownRemark {
            frontmatter {
              title
            }
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
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

  result.data.allFile.nodes.forEach((node) => {
    if (node.sourceInstanceName === 'blog') {
      createPage({
        path: `blog/${node.childMarkdownRemark.frontmatter.title.toLowerCase().split(' ').join('-')}`,
        component: BlogTemplate,
        context: { title: node.childMarkdownRemark.frontmatter.title }, // additional data can be passed via context
      });
    } else if (node.sourceInstanceName === 'press') {
      createPage({
        path: `resources/press/${node.childMarkdownRemark.frontmatter.title.toLowerCase().split(' ').join('-')}`,
        component: PressTemplate,
        context: { title: node.childMarkdownRemark.frontmatter.title }, // additional data can be passed via context
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
      date: Date
      image: String
      alt: String
      content: String
      subtitle: String
    }
    type Sections {
      type: String
      list: [ListItem]
      title: String
      subtitle: String
      name: String
      content_title: String
      text: String
      content_text: String
      image: String
      content_image: String
      alt_text: String
      content_alt_text: String
      image_right: Boolean
      link_text: String
      link_url: String
      background_color_toggle: Boolean
      hours: String
      phone: String
      email: String
      address: String
    }
    type ListItem {
      image: String
      content_image: String
      alt_text: String
      content_alt_text: String
      title: String
      content_title: String
      name: String
      text: String
      content_text: String
      link_text: String
      link_url: String
      background_color_toggle: Boolean
      hours: String
      phone: String
      email: String
      address: String
    }
  `;
  createTypes(typeDefs);
};
