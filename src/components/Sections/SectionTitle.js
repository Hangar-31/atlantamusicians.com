/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/core';
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
  margin: 0 auto 30px auto;


 @media(max-width: ${mq.sm}px) {
    grid-gap:  0;

    font-size: 1.375rem;
    line-height: 1.2;

  }
`;

const Row = styled.div`
  display: flex;
  grid-column: 2 / span 10;
  align-items: flex-end;

  background: ${colors.darkBlue};


  @media(max-width: ${mq.xs}px) {
    grid-column: 1 / span 12;
  }
`;

const Title = styled.h2`
  margin: 0 0 -9px 0;
  padding: 30px 30px 0 30px;

  color: ${colors.lightBlue};
  font-weight: 800;
  font-size: 4rem;
  font-family: ${fonts.montserrat};
  font-style: normal;
  line-height: 1;
  text-transform: uppercase;

  @media(max-width: ${mq.lg}px) {
    margin: 0 0 -7px 0;

    font-size: 3.5rem;
  }
  @media(max-width: ${mq.md}px) {
    margin: 0 0 -6px 0;

    font-size: 3rem;
  }
  @media(max-width: ${mq.sm}px) {
    font-size: 2.5rem;
  }
  @media(max-width: ${mq.xs}px) {
    margin: 0 0 -5px 0;
    padding: 15px 15px 0 15px;

    font-size: 1.375rem;
    line-height: 1.2;
  }
`;


export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        <Title>{section.title}</Title>
      </Row>
      <Row css={css`
        height: 20px;

        background: ${colors.lightBlue};
        @media(max-width: ${mq.sm}px) {
          height: 15px;
        }
        @media(max-width: ${mq.xs}px) {
          height: 8px;
        }
      `}
      />
    </Grid>
  </Container>
);
