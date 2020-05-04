import React from 'react';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layouts/Layout';
import sectionBuilder from '../utilities/section-builder';

export default ({ data }) => {
  const { markdownRemark: { frontmatter: { sections, path } } } = data;
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

  console.log('Components:', components, data);

  return (
    <Layout>
      {sectionBuilder(components, path)}
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
        }
      }
    }
  }
`;
