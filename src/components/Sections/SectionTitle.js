/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { fonts, colors, mq } from '../../configs/styles';

const Container = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  position: relative;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px 15px 15px;

  @media(max-width: ${mq.xs}px) {
    font-size: 1.375rem;
    line-height: 1.2;
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  grid-column: 2 / span 10;
  background: ${colors.darkBlue};

  @media(max-width: ${mq.xs}px) {
    grid-column: 1 / span 12;
  }
`;

const Title = styled.h2`
  color: ${colors.lightBlue};
  font-weight: 800;
  font-size: 4rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  font-style: normal;
  line-height: 1;
  margin: 0 0 -8px 0;
  padding: 30px 30px 0 30px;

  @media(max-width: ${mq.lg}px) {
    font-size: 3.5rem;
    margin: 0 0 -7px 0;
  }
  @media(max-width: ${mq.md}px) {
    font-size: 3rem;
    margin: 0 0 -6px 0;
  }
  @media(max-width: ${mq.sm}px) {
    font-size: 2.5rem;
  }
  @media(max-width: ${mq.xs}px) {
    font-size: 1.375rem;
    line-height: 1.2;
    margin: 0 0 -5px 0;
    padding: 15px 15px 0 15px;
  }
`;


export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        <Title>{section.title}</Title>
      </Row>
      <Row css={css`
        background: ${colors.lightBlue}; 
        height: 20px;
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
