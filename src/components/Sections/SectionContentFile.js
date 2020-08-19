/* eslint-disable no-param-reassign */
import React from 'react';
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
`;

const Row = styled.div`
  position: relative;
  background: ${colors.darkBlue};
  grid-column: 3 / span 8;
  padding: 30px 0;
  text-align: center;
`;

const GLink = styled.a`
  position: relative;
  display: inline-block;
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
        <GLink href={section.file_url}>
          <span>
            {section.file_text}
          </span>
        </GLink>
      </Row>
    </Grid>
  </Container>
);
