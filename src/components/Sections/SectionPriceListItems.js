/* eslint-disable no-param-reassign */
import React from 'react';
// import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { fonts, mq } from '../../configs/styles';

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

const List = styled.ul`

  grid-column: 3 / span 8;


  padding: 0 30px 0 30px;
  overflow-x: hidden;

  font-weight: 300;
  font-size: 1.25rem;
  font-family: ${fonts.nunitoSans};

  list-style: none;

  @media(max-width: ${mq.lg}px) {
    grid-column: 3 / span 8;
  }
  @media(max-width: ${mq.md}px) {
    grid-column: 2 / span 10;

    font-size: 1rem;
  }
  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    padding-left: 30px;

    font-size: 0.875rem;
  }
li {
  margin-bottom: 5px;
  overflow: hidden;
}
li:after {
    float: left;
    width: 0;

    white-space: nowrap;
    content:
 ". . . . . . . . . . . . . . . . . . . . "
 ". . . . . . . . . . . . . . . . . . . . "
 ". . . . . . . . . . . . . . . . . . . . "
 ". . . . . . . . . . . . . . . . . . . . "
 ". . . . . . . . . . . . . . . . . . . . "
 ". . . . . . . . . . . . . . . . . . . . ";
}

span + span {
    position: relative;
    z-index: 1;

    float: right;
    padding-left: 0.33em;

    background: white;
  }
  span:first-child {
    padding-right: 0.33em;

    background: white;
  }

`;


export default ({ section }) => (
  <Container>
    <Grid>
      <List>
        {section.list.map((i) => (
          <li>
            <span>{i.name}</span>
            <span>{i.text}</span>
          </li>
        ))}
      </List>
    </Grid>
  </Container>
);
