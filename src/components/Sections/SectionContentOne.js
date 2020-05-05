import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { fonts, colors } from '../../configs/styles';

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
`;

const Column = styled.div``;

const Title = styled.h1`
display: flex;
align-items: center;

color: #469FD1;
font-weight: 800;
font-size: 30px;
font-family: ${fonts.biryani};
text-transform: uppercase;
font-style: normal;
line-height: 53px;
`;

const P = styled.p`
  font-family: ${fonts.nunitoSans};
  font-size: 1.25rem;
  color: #747474;
`;


export default ({ section }) => {
  console.log('section content-one', section);
  return (
    <Container
      css={css`
        background: ${section.background_color_toggle ? 'linear-gradient(180deg, #F5F5F5 0%, #F7FAFB 100%);' : 'none'}
      `}
    >
      <Grid>
        <Column css={css`
          grid-row: 1;
          grid-column: ${section.image_right ? '2 / span 5' : '7 / span 5'}
        `}
        >
          <Title css={css`color: ${section.background_color_toggle ? colors.lightBlue : colors.darkBlue}`}>{section.title}</Title>
          <P>{section.text}</P>
        </Column>
        <Column
          css={css`
          grid-row: 1;
          grid-column: ${section.image_right ? '8 / span 4' : '2 / span 4'}
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
};
