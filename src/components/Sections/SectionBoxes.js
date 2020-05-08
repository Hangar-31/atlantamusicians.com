import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { colors, fonts } from '../../configs/styles';

const Container = styled.section`

  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;
`;

const Row = styled.div`
  display: grid;
  grid-column: 2 / span 10;
  grid-row-gap: 45px;
  grid-column-gap: 90px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Card = styled.article`
  grid-column: span 3;
  
  border: 1px solid #DFDFDF;

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
    line-height: 1.5rem;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    margin: 1rem 2rem;

    font-weight: 300;
    font-size: 1rem;
    font-family: ${fonts.nunitoSans};
    font-style: normal;
    line-height: 1.3125rem;
    text-align: justify;
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
    <Grid>
      <Row>
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
      </Row>
    </Grid>
  </Container>
);
