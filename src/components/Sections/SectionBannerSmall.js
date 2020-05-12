/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { fonts, colors } from '../../configs/styles';

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
  height: 260px;
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

export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        <ContainerImg>
          <Img src={section.image} alt={section.image_alt} />
          {section.title.length > 0
            && <TintImg css={css`background: ${section.background_color_toggle ? 'linear-gradient(180deg, rgba(236, 64, 103, 1) 0%, rgba(255, 175, 163, 1) 100%);' : '#469FD1;'}`} />}
        </ContainerImg>
        {section.title.length > 0
          && (
            <>
              <div css={css`position: relative; grid-column: 2 / span ${section.link_text.length > 0 ? '6' : '8'}; grid-row: 1; padding-top: 30px;`}>
                <Title>{section.title}</Title>
                <P>{section.text}</P>
              </div>
              {section.link_text.length > 0
              && (
              <ContainerLink css={css`position: relative; grid-column: 8 / span 3; grid-row: 1;`}>
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
