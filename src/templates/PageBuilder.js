import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

// Components
import Layout from '../components/Layouts/Layout';
import { colors } from '../configs/styles';

// Styled Components
const Container = styled.section`
  width: 100%;
  height: 100vw;
  border: 4px solid green;
  background: ${colors.blue};
`;

export default ({ data }) => {
  const { markdownRemark } = data;

  console.log(markdownRemark);
  return (
    <Layout>
      <Container />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
      }
    }
  }
`;
