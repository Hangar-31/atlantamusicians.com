import React from 'react';
import styled from '@emotion/styled';
import Link from 'gatsby-plugin-superlink';

import { colors, fonts, mq } from '../../configs/styles';

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
  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
  }
`;

const Row = styled.div`
  display: grid;
  grid-column: 2 / span 10;
  grid-column-gap: 90px;
  grid-row-gap: 45px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media(max-width: ${mq.xl}px) {
    grid-column-gap: 60px;
  }
  @media(max-width: ${mq.lg}px) {
    grid-column-gap: 30px;
  }
  @media(max-width: ${mq.md}px) {
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media(max-width: ${mq.md}px) {
    grid-column: span 12;
    padding: 0 15px;
  }
  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    padding: 0 15px;
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: span 3;
  justify-content: space-between;

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

    @media(max-width: ${mq.md}px) {
      margin: 15px;
    }
    @media(max-width: ${mq.xs}px) {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }

  p {
    margin: 1rem 2rem;

    font-weight: 300;
    font-size: 1rem;
    font-family: ${fonts.nunitoSans};
    font-style: normal;
    line-height: 1.3125rem;
    text-align: left;

    @media(max-width: ${mq.md}px) {
      margin: 15px;
    }
    @media(max-width: ${mq.xs}px) {
      font-size: 0.925rem;
    }
  }

  footer {
    text-align: center;

    background: ${colors.darkBlue};
  }

  @media(max-width: ${mq.md}px) {
    grid-column: span 4;
  }
   @media(max-width: ${mq.xs}px) {
    grid-column: span 8;
  }
`;

const GLink = styled(Link)`
  position: relative;

  display: inline-block;
  margin: 10px;

  color: #ffffff;
  font-size: 0.75rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;

  @media(max-width: ${mq.xs}px) {
    font-size: 0.675rem
  }

  &:hover {
    span {
      background: ${colors.blue};
    }
  }

  span {
    position: relative;

    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 20px;

    background: ${colors.darkBlue};

    transition: 0.2s;
  }

  &:before {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 0;

    display: block;
    transform: scale(1.02, 1.1);

    background: linear-gradient(180deg, #EC4067 0%, #FFAFA3 100%);
    content: "";
  }
`;

export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        {section.list.map((box) => (
          <Card key={box.title}>
            <div>
              {box.image && (
              <img
                src={box.image}
                alt={box.alt_text}
              />
              )}
              <h1>{box.title}</h1>
              <p>{box.text}</p>
            </div>
            {box.link_url && box.link_text
            && (
            <footer>
              <GLink to={box.link_url}>
                <span>
                  {box.link_text}
                </span>
              </GLink>
            </footer>
            )}
          </Card>
        ))}
      </Row>
    </Grid>
  </Container>
);
