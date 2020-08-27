/* eslint-disable no-param-reassign */
import React from 'react';
// import { css } from '@emotion/core';
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
  }
`;

const Title = styled.h3`
  grid-column: 3 / span 8;
  margin: 0;
  padding: 0px 30px 15px 30px;

  color: ${colors.blue};
  font-weight: 800;
  font-size: 1.25rem;
  font-family: ${fonts.biryani};
  line-height: 1;

  @media(max-width: ${mq.sm}px) {
    grid-column: 2 / span 10;
  }
  @media(max-width: ${mq.xs}px) {
    grid-column: 1 / span 12;
    padding: 0px 15px 5px 15px;
  }
`;


export default ({ section }) => (
  <Container>
    <Grid>
      <Title>{section.title}</Title>
    </Grid>
  </Container>
);
