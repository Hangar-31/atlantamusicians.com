import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

const useQuerySection = (sectionIndex) => {
  const data = useStaticQuery(graphql`
    query {
    markdownRemark(frontmatter: { sections: {elemMatch: {type: {eq: "section_content_one"}} }}) {
      frontmatter {
        path
        sections {
          type
          section_content_one_title
          section_content_one_text
          section_content_one_image
          section_content_one_image_alt_text
        }
      }
    }
  }`);
  const { markdownRemark: { frontmatter: { sections: { [sectionIndex]: section } } } } = data;
  return section;
};

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 40vh;
`;
const Wrapper = styled.div`
  padding: 30px 0;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
`;


export default ({ sectionIndex }) => {
  const section = useQuerySection(sectionIndex);
  console.log('section content-one', section, sectionIndex);
  return (
    <Container>
      <Wrapper />
    </Container>
  );
};
