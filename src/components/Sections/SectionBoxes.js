import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

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

export default ({ section }) => (
  <Container>
    <Wrapper>
      {section.list.map((box) => (
        <Card key={box.title}>
          {box.image && (
            <img
              src={box.image}
              alt={box.alt_text}
            />
          )}
          <h1>{box.title}</h1>
          <p>{box.text}</p>
          <footer>
            <Button to={box.link_url}>
              {box.link_text}
            </Button>
          </footer>
        </Card>
      ))}
    </Wrapper>
  </Container>
);
