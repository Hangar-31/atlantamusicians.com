/* eslint-disable no-param-reassign */
import React from 'react';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';

import {
  P, PLink, Title2, Item, Image, List,
} from '../../templates/Styles';

import { mq } from '../../configs/styles';

const ReactMarkdown = require('react-markdown');

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
  padding: 0 30px 30px 30px;

  > * {
    grid-column: 2 / span 10;
  }

  @media(max-width: ${mq.sm}px) {
    padding: 0 15px 15px 15px;
    > * {
      grid-column: 1 / span 12;
    }
  }

  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
  }
`;

// const Text = styled.p`
//   grid-column: 3 / span 8;
//   margin: 0;
//   padding: 0px 30px 30px 30px;

//   font-weight: 300;
//   font-size: 1.25rem;
//   font-family: ${fonts.nunitoSans};
//   font-style: normal;
//   text-align: justify;

//   @media(max-width: ${mq.md}px) {
//     grid-column: 2 / span 10;

//     font-size: 1rem;
//   }

//   @media(max-width: ${mq.xs}px) {
//     grid-column: 1 / span 12;

//     font-size: 0.875rem;
//   }
// `;


export default ({ section }) => (
  <Container>
    {console.log(section)}
    <Grid>
      <ReactMarkdown
        renderers={{
          link: PLink,
          paragraph: P,
          heading: Title2,
          image: Image,
          list: List,
          listItem: Item,
        }}
        source={section.content}
      />
    </Grid>
  </Container>
);
