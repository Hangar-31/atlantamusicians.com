/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'gatsby-plugin-superlink';


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


`;

const Row = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow: hidden;

  background: #FFFFFF;

  border-radius: 10px;
  box-shadow: 0px 0 4px  rgba(0, 0, 0, 0.25);

  @media(max-width: ${mq.xs}px) {
    grid-column: 1 / span 12;
  }
`;

const Title = styled.h1`
  grid-column: 1 / span 12;
  margin: 30px 0;

  color: #fff;
  font-weight: 800;
  font-size: 20px;
  font-family: ${fonts.biryani};
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;

  @media(max-width: ${mq.xs}px) {
    font-size: 1.5rem;
  }
`;

const ContainerImg = styled.div`
  position: relative;

  grid-column: 1 / span 10;
  grid-row: 2;
  width: 100%;
  height: calc(100% + 0px);
  min-height: 260px;
  overflow: hidden;
`;


const Img = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const P = styled.p`
  max-width: 75%;
  margin: 0 auto;
  padding-bottom: 30px;

  color: #ffffff;
  font-size: 1rem;
  font-family: ${fonts.nunitoSans};

  @media(max-width: ${mq.xs}px) {
    font-size: 1rem;
  }
`;

const ContainerLink = styled.div`
  position: relative;

  display: flex;

  grid-column: span 10;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 45px;

  background: ${colors.darkBlue};

  @media(max-width: ${mq.md}px) {
    padding: 30px 0;
  }
  @media(max-width: ${mq.sm}px) {
    padding: 15px 0;
  }
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

const MainContent = styled.div`

  grid-column: span 10;
  padding: 50px 100px;

  h1 {
    color: ${colors.darkBlue};
    font-weight: 800;
    font-size: 30px;
    font-family: ${fonts.biryani};
    text-align: center
  }

  p {
    font-weight: 300;
    font-size: 20px;
    font-family: ${fonts.nunitoSans};
    text-align: justify;
  }
`;

export default ({ section }) => (
  <>
    <Container>
      <Grid>
        <Row>
          {(section.title || section.text) && (
          <MainContent>
            <h1>{section.title}</h1>
            <p>{section.text}</p>
          </MainContent>
          )}
          {section.content_image && (
          <ContainerImg>
            <Img
              src={section.content_image}
              alt={section.content_image_alt}
            />
          </ContainerImg>
          )}
          {section.content_title
            && (
            <>
              <div css={css`
                position: relative;

                grid-column: 2 / span 8;
                grid-row: 2;
                padding-top: 30px;

                @media(max-width: ${mq.md}px) {
                  padding: 30px 45px;
                }
                @media(max-width: ${mq.sm}px) {
                  padding: 15px 30px;
                }
                @media(max-width: ${mq.xs}px) {
                  padding: 15px;
                }
              `}
              >
                <Title>
                  {section.content_title}

                </Title>
                <P>{section.content_text}</P>
              </div>
              {section.link_text
              && (
              <ContainerLink>
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
