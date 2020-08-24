/* eslint-disable no-param-reassign */
import React from 'react';
// import { css } from '@emotion/core';
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
`;

const Title = styled.h3`
  grid-column: 3 / span 8;
  color: ${colors.darkBlue};
  padding: 0px 30px 30px 30px;
  margin: 0;
  
  line-height: 1;
  font-weight: 800;
  font-size: 1.875rem;
  font-family: ${fonts.biryani};
  text-transform: uppercase;

  @media(max-width: ${mq.sm}px) {
    grid-column: 2 / span 10;
  }
  @media(max-width: ${mq.xs}px) {
    grid-column: 1 / span 12;
    font-size: 1rem;
    padding: 0px 30px 30px 30px;

  }
`;

export default ({ section }) => (
  <Container>
    <Grid>
      <Title>{section.title}</Title>
    </Grid>
  </Container>
);
