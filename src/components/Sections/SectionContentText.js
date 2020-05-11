/* eslint-disable no-param-reassign */
import React from 'react';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { fonts } from '../../configs/styles';
import textToComponent from '../../utilities/text-to-component';

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

const Text = styled.p`
  grid-column: 3 / span 8;
  font-size: 1.25rem;

  font-weight: 300;
  font-family: ${fonts.nunitoSans};
  font-style: normal;
  text-align: justify;
`;


export default ({ section }) => (
  <Container>
    <Grid>
      {textToComponent(section.text, Text)}
    </Grid>
  </Container>
);
