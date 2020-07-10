/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { fonts, colors, mq } from '../../configs/styles';
import ImageAccentCityScape from '../Images/Accents/ImageAccentCityScape';

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
  padding: 30px 0;
`;

const Row = styled.div`
  display: grid;
  grid-column: 2 / span 10;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  
  @media(max-width: ${mq.xs}px) {
    grid-column: 1 / span 12;
  }
`;

const Title = styled.h1`
  grid-column: 1 / span 12;
  color: ${colors.blue};
  font-weight: 800;
  font-size: 30px;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  font-style: normal;
  line-height: 1;
  margin: 30px 0;
`;

const ContainerImg = styled.div`
  position: relative;
  grid-row: 1;
  grid-column: 1 / span 10;
  width: 100%;
  height: calc(100% + 0px);
  overflow: hidden;
`;

const TintImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #469FD1;
  opacity: 0.5;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const P = styled.p`
  font-family: ${fonts.nunitoSans};
  font-size: 1.25rem;
  color: #ffffff;
  padding-bottom: 30px;

  @media(max-width: ${mq.xs}px) {
    font-size: 1rem;
  }
`;

const ContainerLink = styled.div`
  position: relative;
  display: flex;
  background: ${colors.darkBlue};
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const GLink = styled(Link)`
  position: relative;
  color: #ffffff;
  font-size: 1rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;
  
  &:hover {
    span {
      background: ${colors.blue};
    }
  }

  span {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    padding: 15px 30px;
    background: ${colors.darkBlue};
    transition: 0.2s;
  }

  &:before {
    z-index: 0;
    position: absolute;
    content: "";
    display: block;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: linear-gradient(180deg, #EC4067 0%, #FFAFA3 100%);
  }
`;

export default ({ section }) => {
  if (typeof section.content_title === 'undefined') {
    section.content_title = '';
  }
  if (typeof section.content_text === 'undefined') {
    section.content_text = '';
  }
  if (typeof section.link_text === 'undefined') {
    section.link_text = '';
  }

  return (
    <>
      <Container css={css`
        height: auto; 
        margin-top: 75px;
        @media(max-width: ${mq.xs}px) {
          margin-top: 30px;
        }
      `}
      >
        <Grid css={css`
          padding: 0 15px;
          @media(max-width: ${mq.xs}px) {
            justify-items: center;
          }
          `}
        >
          <Title css={css`
            line-height: 0.7; 
            margin: 0; 
            padding: 0; 
            color: #536080;

            @media(max-width: ${mq.md}px) {
              font-size: 1.5rem;
            }
            @media(max-width: ${mq.xs}px) {
              text-align: center;: center;
              line-height: 1.5;
              margin-bottom: -10px;
            }
          `}
          >
            {section.title}

          </Title>
        </Grid>
      </Container>

      <Container>
        <ImageAccentCityScape cssProp="position: absolute !important; width: 100%; height: 200px;" />
        <Grid>
          <Row>
            <ContainerImg>
              <Img
                css={css`
                position: absolute !important;
                top: 0;
                left: 0;
              `}
                src={section.content_image}
                alt={section.content_image_alt}
              />
              {section.content_title.length > 0
            && <TintImg />}
            </ContainerImg>
            {section.content_title.length > 0
            && (
            <>
              <div css={css`
                position: relative; 
                grid-column: 2 / span ${section.link_text.length > 0 ? '6' : '8'}; 
                grid-row: 1; 
                padding-top: 30px;

                @media(max-width: ${mq.md}px) {
                  padding: 30px 45px;
                  grid-row: 1;
                  grid-column: 1 / span 10; 
                }
                @media(max-width: ${mq.sm}px) {
                  padding: 15px 30px;
                }
                @media(max-width: ${mq.xs}px) {
                  padding: 15px;
                }
              `}
              >
                <Title css={css`
                    @media(max-width: ${mq.xs}px) {
                      font-size: 1.5rem;
                    }
                `}
                >
                  {section.content_title}

                </Title>
                <P>{section.content_text}</P>
              </div>
              {section.link_text.length > 0
              && (
              <ContainerLink css={css`
                position: relative; 
                grid-column: 8 / span 3; 
                grid-row: 1;

                @media(max-width: ${mq.md}px) {
                  padding: 30px 0;
                  grid-row: 2;
                  grid-column: 1 / span 10; 
                }
                @media(max-width: ${mq.sm}px) {
                  padding: 15px 0;
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
    </>
  );
};
