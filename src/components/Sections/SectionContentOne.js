import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { fonts, colors, mq } from '../../configs/styles';

const Container = styled.article`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;
const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;
  align-items: center;

  @media(max-width: ${mq.sm}px) {
    padding: 45px 30px;
  }
  @media(max-width: ${mq.xs}px) {
    padding: 30px 15px;
  }
`;

const Column = styled.div``;

const Title = styled.h1`
  display: flex;
  align-items: center;

  color: #469FD1;
  font-weight: 800;
  font-size: 2rem;
  font-family: ${fonts.biryani};
  text-transform: uppercase;
  font-style: normal;
  line-height: 53px;

  @media(max-width: ${mq.sm}px) {
    font-size: 1.75rem;
  }
  @media(max-width: ${mq.xs}px) {
    font-size: 1.5rem;
  }
`;

const P = styled.p`
  font-family: ${fonts.nunitoSans};
  font-size: 1.25rem;
  color: #747474;

  @media(max-width: ${mq.sm}px) {
    font-size: 1.125rem;
  }
  @media(max-width: ${mq.xs}px) {
    font-size: 1rem;
  }
`;


export default ({ section }) => (
  <Container
    css={css`
        background: ${section.background_color_toggle ? 'linear-gradient(180deg, #F5F5F5 0%, #F7FAFB 100%);' : 'none'}
      `}
  >
    <Grid>
      <Column css={css`
          grid-row: 1;
          grid-column: ${section.image_right ? '2 / span 5' : '7 / span 5'};

          @media(max-width: ${mq.sm}px) {
            grid-column: ${section.image_right ? '1 / span 6' : '7 / span 6'};
          }
          @media(max-width: ${mq.xs}px) {
            grid-column:  1 / span 12;
          }
        `}
      >
        <Title css={css`color: ${section.background_color_toggle ? colors.lightBlue : colors.darkBlue}`}>{section.title}</Title>
        <P>{section.text}</P>
      </Column>
      <Column
        css={css`
          grid-row: 1;
          grid-column: ${section.image_right ? '8 / span 4' : '2 / span 4'};
          
          @media(max-width: ${mq.md}px) {
            grid-column: ${section.image_right ? '7 / span 5' : '2 / span 5'};
          }
          @media(max-width: ${mq.sm}px) {
            grid-column: ${section.image_right ? '7 / span 6' : '1 / span 6'};
          }
          @media(max-width: ${mq.xs}px) {
            display: none;
          }
        `}
      >
        <img
          css={css`max-width: 100%;`}
          src={section.image}
          alt={section.image_alt}
        />
      </Column>
    </Grid>
  </Container>
);
