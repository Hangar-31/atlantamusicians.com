/* eslint-disable consistent-return */
import React from 'react';
import { graphql } from 'gatsby';

// Components
import { ThemeProvider } from 'emotion-theming';
import { Helmet } from 'react-helmet';
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
  const [{
    markdownRemark: {
      frontmatter: {
        sections = [],
        path,
        seo_title: seoTitle,
        seo_description: seoDescription,
      } = {},
    } = {},
  }] = removeNulls([data]);
  const components = removeNulls(sections);

  return (
    <Layout>
      <Helmet>
        {seoTitle && <title>{seoTitle}</title>}
        {seoDescription && <meta name="description" content={seoDescription} />}
        <meta property="og:url" content={"https://atlantamusicians.com/" + path} />
      </Helmet>
      <ThemeProvider theme={{
        colorActive: '#EC4067',
        colorActiveHover: '#000000',
        colorBtnBg: '#1F225B',
        colorBtnHover: '#EC4067',
        colorBtnText: '#FFFFFF',
        colorDarkGray: '#4C4C4C',
        colorDisabled: '#D7D7D7',
        colorHint: '#7D7D7D',
        colorNegative: '#EC4067',
        colorOffWhite: '#FDFDFD',
        colorWhite: '#FFFFFF',
      }}
      >
        {sectionBuilder(components)}
      </ThemeProvider>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        path
        seo_title
        seo_description
        sections {
          type
          content
          list {
            name
            title
            content_title
            text
            content_text
            image
            content_image
            alt_text
            content_alt_text
            link_text
            link_url
            background_color_toggle
            hours
            phone
            email
            address
          }
          name
          title
          content_title
          text
          content_text
          image
          content_image
          alt_text
          content_alt_text
          image_right
          link_text
          link_url
          file_text
          file_url
          background_color_toggle
          hours
          phone
          email
          address
          year
          payment_type
        }
      }
    }
  }
`;
