/* eslint-disable no-param-reassign */
import React from 'react';
import styled from '@emotion/styled';

import { fonts, colors, mq } from '../../configs/styles';

const Container = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  position: relative;

  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
    padding: 0 20px;
  }
`;

const Row = styled.div`
  position: relative;

  grid-column: 3 / span 8;
  padding: 30px 0;

  text-align: center;

  background: ${colors.darkBlue};

  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    padding: 10px;
  }
`;

const GLink = styled.a`
  position: relative;

  display: inline-block;

  color: #ffffff;
  font-size: 1rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;

  @media(max-width: ${mq.sm}px) {
    font-size: 0.875rem;
  }

  @media(max-width: ${mq.xs}px) {
    font-size: 0.625rem;
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
    padding: 15px 30px;

    background: ${colors.darkBlue};

    transition: 0.2s;
  }

  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 0;

    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);

    background: linear-gradient(180deg, #EC4067 0%, #FFAFA3 100%);
    content: "";
  }
`;

export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        <GLink href={section.file_url}>
          <span>
            {section.file_text}
          </span>
        </GLink>
      </Row>
    </Grid>
  </Container>
);
