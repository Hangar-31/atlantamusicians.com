import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 40vh;
`;

const useQuerySection = (sectionIndex) => {
  const data = useStaticQuery(graphql`
    query {
    markdownRemark(frontmatter: { sections: {elemMatch: {type: {eq: "section_slideshow"}} }}) {
      frontmatter {
        path
        sections {
          type
          section_slideshow_list {
            section_slideshow_image
            section_slideshow_image_alt_text
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
  console.log('section slideshow', section);
  return (
    <Container>
      {section.section_slideshow_list.map((image) => (
        <img key={image.section_slideshow_image_alt_text} css={css`position: absolute; left: 0; top: 0; height: 100%; width: 100%;`} src={image.section_slideshow_image} alt={image.section_slideshow_image_alt_text} />
      ))}
    </Container>
  );
};
