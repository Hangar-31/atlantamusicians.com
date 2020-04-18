import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 40vh;
`;

export default ({ images } = []) => (
  <Container>
    {images.map((image) => (
      <img key={image.section_slideshow_image_alt_text} css={css`position: absolute; left: 0; top: 0; height: 100%; width: 100%;`} src={image.section_slideshow_image} alt={image.section_slideshow_image_alt_text} />
    ))}
  </Container>
);
