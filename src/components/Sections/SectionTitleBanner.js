import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
// import { Link } from 'gatsby';

import { fonts, colors } from '../../configs/styles';
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
  grid-row-gap: 45px;
  grid-column-gap: 90px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Title = styled.h1`
  grid-column: 1 / span 12;
  color: ${colors.blue};
  font-weight: 800;
  font-size: 30px;
  font-family: ${fonts.biryani};
  text-transform: uppercase;
  font-style: normal;
  line-height: 53px;
`;

const Img = styled.img`
  grid-row: 1;
  grid-column: 1 / span 10;
  width: 100%;
  height: 260px;
`;

const P = styled.p`
  font-family: ${fonts.nunitoSans};
  font-size: 1.25rem;
  color: #ffffff;
`;

export default ({ section }) => (
  <>
    <Container css={css`height: auto;`}>
      <Grid css={css`padding: 0;`}>
        <Title css={css`line-height: 0.46; margin: 0; padding: 0; color: #536080;`}>{section.title}</Title>
      </Grid>
    </Container>

    <Container>
      <ImageAccentCityScape cssProp="position: absolute !important; width: 100%; height: 200px;" />
      <Grid>
        <Row>
          <Img src={section.content_image} alt={section.content_image_alt} />
          <div css={css`grid-column: 2 / span 8; grid-row: 1; padding-top: 30px;`}>
            <Title>{section.content_title}</Title>
            <P>{section.content_text}</P>
          </div>
        </Row>
      </Grid>
    </Container>
  </>
);
