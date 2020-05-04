import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.section`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 30px 0;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
`;

// const Card = styled.article`
//   grid-column: span 4;
// `;

const useQuerySection = (sectionIndex) => {
  const data = useStaticQuery(graphql`
    query {
    markdownRemark(frontmatter: { sections: {elemMatch: {type: {eq: "section_boxes"}} }}) {
      frontmatter {
        path
        sections {
          section_boxes_list {
            section_boxes_item_title
            section_boxes_item_text
            section_boxes_item_link_url
            section_boxes_item_link_text
            section_boxes_item_image_alt_text
            section_boxes_item_image
          }
        }
      }
    }
  }`);
  const { markdownRemark: { frontmatter: { sections: { [sectionIndex]: section } } } } = data;
  return section;
};
export default ({ sectionIndex }) => {
  const section = useQuerySection(sectionIndex);

  console.log('section boxes', section);
  return (
    <Container>
      <Wrapper />
    </Container>
  );
};
