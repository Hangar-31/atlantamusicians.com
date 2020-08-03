const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const PageBuilderTemplate = path.resolve('src/templates/PageBuilder.js');
  const BlogTemplate = path.resolve('src/templates/BlogTemplate.js');
  const PressTemplate = path.resolve('src/templates/PressTemplate.js');

  const result = await graphql(`
    {
      pages: allMarkdownRemark(filter: {frontmatter: {path: {ne: null}}}) {
        edges {
          node {
            frontmatter {
              type
              path
              title
            }
          }
          previous {
            frontmatter {
              title
            }
          }
          next {
            frontmatter {
              title
            }
          }
        }
      }
      blogs: allMarkdownRemark(filter: {frontmatter: {type: {eq: "blog"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              type
              title
            }
          }
          previous {
            frontmatter {
              title
            }
          }
          next {
            frontmatter {
              title
            }
          }
        }
      }
      press: allMarkdownRemark(filter: {frontmatter: {type: {eq: "press"}}}, sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              type
              title
            }
          }
          previous {
            frontmatter {
              title
            }
          }
          next {
            frontmatter {
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

  // Pages
  result.data.pages.edges.forEach(({ node }) => {
    if (node.frontmatter.path !== null) {
      createPage({
        path: node.frontmatter.path,
        component: PageBuilderTemplate,
        context: {}, // additional data can be passed via context
      });
    }
  });

  // Blogs
  result.data.blogs.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `blog/${node.frontmatter.title.toLowerCase().split(' ').join('-')}`,
      component: BlogTemplate,
      // additional data can be passed via context
      context: {
        title: node.frontmatter.title,
        nextLink: next ? `blog/${next.frontmatter.title.toLowerCase().split(' ').join('-')}` : null,
        previousLink: previous ? `blog/${previous.frontmatter.title.toLowerCase().split(' ').join('-')}` : null,
      },
    });
  });

  // Press
  result.data.press.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `resources/press/${node.frontmatter.title.toLowerCase().split(' ').join('-')}`,
      component: PressTemplate,
      // additional data can be passed via context
      context: {
        title: node.frontmatter.title,
        nextLink: next ? `resources/press/${next.frontmatter.title.toLowerCase().split(' ').join('-')}` : null,
        previousLink: previous ? `resources/press/${previous.frontmatter.title.toLowerCase().split(' ').join('-')}` : null,
      },
    });
  });
};


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      type: String
    }
    type Frontmatter {
      type: String
      path: String
      sections: [Sections]
      list: [ListItem]
      tags: [ListItem]
      postTags: [String]
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
      year: Int
      payment_type: String
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
      tag: String
    }
  `;
  createTypes(typeDefs);
};
