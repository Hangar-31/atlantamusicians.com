import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layouts/Layout';
import sectionBuilder from '../utilities/section-builder';

const removeNulls = (data) => data.map((item) => {
  const obj = {};

  Object.keys(item).forEach((key) => {
    if (item[key] !== null) {
      obj[key] = item[key];

      if (Array.isArray(item[key])) {
        obj[key] = removeNulls(item[key]);
      }
    }
  });
  return obj;
});

export default ({ data }) => {
  const { markdownRemark: { frontmatter: { sections } } } = data;
  const components = removeNulls(sections);

  console.log('Components:', components, data);

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
          list {
            image
            alt_text
            title
            text
            link_text
            link_url
          }
          title
          text
          image
          alt_text
          image_right
          link_text
          link_url
        }
      }
    }
  }
`;
