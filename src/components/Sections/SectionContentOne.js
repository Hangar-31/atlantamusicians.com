import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import SuperLink from 'gatsby-plugin-superlink';
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
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;

  @media(max-width: ${mq.sm}px) {
    padding: 45px 30px;
  }

  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
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
  font-style: normal;
  line-height: 53px;
  text-transform: uppercase;

  @media(max-width: ${mq.sm}px) {
    font-size: 1.75rem;
  }
  @media(max-width: ${mq.xs}px) {
    font-size: 1.5rem;
  }
`;

const P = styled.p`
  color: #747474;
  font-size: 1.25rem;
  font-family: ${fonts.nunitoSans};

  @media(max-width: ${mq.sm}px) {
    font-size: 1.125rem;
  }
  @media(max-width: ${mq.xs}px) {
    font-size: 1rem;
  }
`;

const Link = styled(SuperLink)`
  float: right;

  color: #EC4067;
  font-size: 1rem;
  font-family: ${fonts.nunitoSans};
  text-transform: uppercase;
  text-decoration: underline;

  transition: 0.2s;

  &:hover {
    color: ${colors.darkBlue};
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
          grid-column: ${section.image_right ? '2 / span 5' : '7 / span 5'};
          grid-row: 1;

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
        {section.link_text && section.link_url
          && <Link to={section.link_url}>{section.link_text}</Link>}
      </Column>
      <Column
        css={css`
          grid-column: ${section.image_right ? '8 / span 4' : '2 / span 4'};
          grid-row: 1;

          @media(max-width: ${mq.md}px) {
            grid-column: ${section.image_right ? '7 / span 5' : '2 / span 5'};
          }
          @media(max-width: ${mq.sm}px) {
            grid-column: ${section.image_right ? '7 / span 6' : '1 / span 6'};
          }
          @media(max-width: ${mq.xs}px) {
            grid-column: span 12;
            grid-row: 2;
            margin-top: 15px;
            > img {
              width: 100%;
              max-height: 200px;
              object-fit: cover;
          }
        }`}
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
