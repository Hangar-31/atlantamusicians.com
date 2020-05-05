import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { colors, fonts } from '../../configs/styles';

const Container = styled.section`

  width: 100%;
`;

const Wrapper = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-width: 84.375rem;
  margin: 0 auto;
  padding: 1.875rem 0;

`;

const Card = styled.article`

  width: 20.625rem;
  margin: 1.25rem 2.8125rem;

  img {
    max-width: 100%;
  }

  h1 {
    margin: 0.8em;

    color: ${colors.darkBlue};
    font-weight: normal;
    font-size: 1.25rem;
    font-family: ${fonts.montserrat};
    font-style: normal;
    line-height: 1.2em;
    line-height: 1.5rem;
    text-align: center;
  }

  p {
    margin: 1rem 2rem;

    font-weight: 300;
    font-size: 1rem;
    font-family: ${fonts.nunitoSans};
    font-style: normal;
    line-height: 1.3125rem;
  }

  footer {
    text-align: center;

    background: ${colors.darkBlue};
  }
`;

const Button = styled(Link)`

  display: flex;
  display: inline-block;
  align-items: center;
  margin: 0.75rem auto;
  padding: 0.5rem 0.9375rem;

  color: #fff;
  font-weight: normal;
  font-size: 0.875rem;
  font-family: ${fonts.archivo};
  font-style: normal;
  line-height: 0.9375rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  border: 0.0625rem solid ${colors.border};
  border-radius: 0.25rem;
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
