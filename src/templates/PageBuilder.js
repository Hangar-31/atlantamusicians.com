import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layouts/Layout';
import sectionBuilder from '../utilities/section-builder';

export default ({ data }) => {
  const { markdownRemark: { frontmatter: { sections } } } = data;
  const components = [];

  sections.forEach((section) => {
    const obj = {};

    Object.keys(section).forEach((key) => {
      if (section[key] !== null) {
        obj[key] = section[key];
      }
    });

    components.push(obj);
  });

  return (
    <Layout>
      {sectionBuilder(components)}
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        sections {
          type
          section_content_one_title
          section_content_one_text
          section_content_one_image  {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          section_content_one_image_alt_text
          section_boxes_list {
            section_boxes_item_title
            section_boxes_item_text
            section_boxes_item_link_url
            section_boxes_item_link_text
            section_boxes_item_image_alt_text
            section_boxes_item_image  {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          section_slideshow_list {
            section_slideshow_image  {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            section_slideshow_image_alt_text
          }
        }
      }
    }
  }
`;
