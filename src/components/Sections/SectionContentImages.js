import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 0;
`;

const Image = styled.img`
  width: 100%;
`;

export default ({ section }) => (
  <Container>
    <Grid>
      {section.list.length === 1 && section.list.map((image) => (
        <Image css={css`grid-column: 3 / span ${8 / section.list.length}`} src={image.image} alt={image.alt_text} />
      ))}
      {section.list.length === 2 && section.list.map((image, i) => (
        <Image css={css`grid-column: ${3 + (i * 4)} / span 4`} src={image.image} alt={image.alt_text} />
      ))}
    </Grid>
  </Container>
);
