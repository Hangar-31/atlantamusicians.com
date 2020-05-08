/* eslint-disable no-param-reassign */
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

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
  display: flex;
  align-items: flex-end;
  grid-column: 2 / span 10;
  background: ${colors.darkBlue};
`;

const Title = styled.h1`
  color: ${colors.lightBlue};
  font-weight: 800;
  font-size: 4rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  font-style: normal;
  line-height: 0.76;
  margin: 0;
  padding: 30px 30px 0 30px;
`;


export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        <Title>{section.title}</Title>
      </Row>
      <Row css={css`background: ${colors.lightBlue}; height: 20px;`} />
    </Grid>
  </Container>
);
