/* eslint-disable no-param-reassign */
import React from 'react';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { fonts, mq } from '../../configs/styles';
import textToComponent from '../../utilities/text-to-component';

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
`;

const Text = styled.p`
  grid-column: 3 / span 8;
  padding: 0px 30px 30px 30px;
  margin: 0;

  font-weight: 300;
  font-size: 1.25rem;
  font-family: ${fonts.nunitoSans};
  font-style: normal;
  text-align: justify;

  @media(max-width: ${mq.sm}px) {
    grid-column: 2 / span 10;
    font-size: 1rem;
  }

  @media(max-width: ${mq.xs}px) {
    grid-column: 1 / span 12;
    font-size: 0.875rem;
  }
`;


export default ({ section }) => (
  <Container>
    <Grid>
      {textToComponent(section.text, Text)}
    </Grid>
  </Container>
);
