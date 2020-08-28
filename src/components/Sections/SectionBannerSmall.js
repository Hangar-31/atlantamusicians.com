/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

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
  padding: 30px 0;
  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
    padding: 20px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-column: 2 / span 9;
  grid-column-gap: 0;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding-left: 20px;

   @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    padding-left: 0;
  }
`;

const Title = styled.h1`
  position: relative;
  z-index: 1;

  grid-column: 1 / span 12;
  margin: 30px 0;

  color: ${colors.blue};
  font-weight: 800;
  font-size: 1.875rem;
  font-family: ${fonts.montserrat};
  font-style: normal;
  line-height: 1;
  text-transform: uppercase;

  @media(max-width: ${mq.md}px) {
    font-size: 1.5rem;
  }

  @media(max-width: ${mq.xs}px) {
    font-size: 1.125rem;
  }
`;


const TintImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100%;

  background: #469FD1;
  opacity: 0.5;
`;


const P = styled.p`
  position: relative;
  z-index: 1;

  color: #ffffff;
  font-size: 1.25rem;
  font-family: ${fonts.nunitoSans};

  @media(max-width: ${mq.sm}px) {
    font-size: 1rem;
  }

  @media(max-width: ${mq.xs}px) {
    font-size: 0.875rem;
  }
`;

const ContainerLink = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  background: ${colors.darkBlue};
`;

const GLink = styled(Link)`
  position: relative;

  color: #ffffff;
  font-size: 1rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;

  @media(max-width: ${mq.sm}px) {
    font-size: 0.875rem;
  }

  @media(max-width: ${mq.xs}px) {
    font-size: 0.625rem;
  }


  &:hover {
    span {
      background: ${colors.blue};
    }
  }

  span {
    position: relative;

    display: block;
    width: 100%;
    height: 100%;
    padding: 15px 30px;

    background: ${colors.darkBlue};

    transition: 0.2s;
  }

  &:before {
    position: absolute;
    top: -1px;
    left: -1px;
    z-index: 0;

    display: block;
    width: calc(100% + 2px);
    height: calc(100% + 2px);

    background: linear-gradient(180deg, #EC4067 0%, #FFAFA3 100%);
    content: "";
  }
`;

export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        {section.title
          && (
            <>
              <div css={css`
                position: relative;

                grid-column: 2 / span ${section.link_text ? '6' : '8'};
                grid-row: 1;
                padding: 30px;

                background-image: url('${section.image}');


                @media(max-width: ${mq.md}px) {
                grid-column: span 12;
                }
                `}
              >
                <Title>{section.title}</Title>
                <P>{section.text}</P>
                <TintImg css={css`background: ${section.background_color_toggle ? 'linear-gradient(180deg, rgba(236, 64, 103, 1) 0%, rgba(255, 175, 163, 1) 100%);' : '#469FD1;'}`} />
              </div>
              {section.link_text.length > 0
              && (
              <ContainerLink css={css`
              position: relative;

              grid-column: 8 / span 3;
              grid-row: 1;

              @media(max-width: ${mq.md}px) {
                grid-column: span 12;
                grid-row: 2;
              }

              `}
              >
                <GLink to={section.link_url}>
                  <span>
                    {section.link_text}
                  </span>
                </GLink>
              </ContainerLink>
              )}
            </>
          )}
      </Row>
    </Grid>
  </Container>
);
