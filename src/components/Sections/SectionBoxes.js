import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { colors, fonts } from '../../configs/styles';

const Container = styled.section`
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 30px 0;
  max-width: 1350px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 330px 330px 330px;
  grid-column-gap: 90px;
`;

const Card = styled.article`
  grid-column: span 1;

  img {
    max-width: 100%;
  }
  h1 {
    font-family: ${fonts.montserrat};
    font-size: 1.25em;
    color: ${colors.darkBlue};
    line-height: 1.2em;
    font-style: normal;
    font-weight: normal;
    text-align: center;
    margin: 0.8em;
  }
  p {
    font-family: ${fonts.nunitoSans};
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 130%;
  }
  footer {
    background: ${colors.darkBlue};
  }
`;

const Button = styled(Link)`
  font-family: ${fonts.archivo};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #FFFFFF;
`;

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
      <Wrapper>
        {section.section_boxes_list.map((box) => (
          <Card key={box.section_boxes_item_title}>
            {box.section_boxes_item_image && (
            <img
              src={box.section_boxes_item_image}
              alt={box.section_boxes_item_image_alt_text}
            />
            )}
            <h1>{box.section_boxes_item_title}</h1>
            <p>{box.section_boxes_item_text}</p>
            <footer>
              <Button to={box.section_boxes_item_link_url}>
                {box.section_boxes_item_link_text}
              </Button>
            </footer>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};
