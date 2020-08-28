import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { mq } from '../../configs/styles';

const Container = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
  }
`;

const Image = styled.img`
  width: 100%;
  padding: 0px 30px 30px 30px;
`;

export default ({ section }) => (
  <Container>
    <Grid>
      {section.list.length === 1 && section.list.map((image) => (
        <Image
          css={css`
            grid-column: 3 / span ${8 / section.list.length};

            @media(max-width: ${mq.sm}px) {
              grid-column: 2 / span ${10 / section.list.length};
            }
            @media(max-width: ${mq.xs}px) {
              grid-column: 1 / span ${12 / section.list.length};
            }
        `}
          src={image.image}
          alt={image.alt_text}
        />
      ))}
      {section.list.length === 2 && section.list.map((image, i) => (
        <Image
          css={css`
          grid-column: ${3 + (i * 4)} / span 4;

          @media(max-width: ${mq.sm}px) {
            grid-column: ${3 + (i * 4)}  / span ${10 / section.list.length}
          }
          @media(max-width: ${mq.xs}px) {
            grid-column: 1  / span ${12 / section.list.length}
          }
          `}
          src={image.image}
          alt={image.alt_text}
        />
      ))}
    </Grid>
  </Container>
);
