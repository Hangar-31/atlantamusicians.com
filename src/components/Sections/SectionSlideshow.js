import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Container = styled.section`
  position: relative;

  width: 100%;
  height: 40vh;
`;


export default ({ section }) => {
  console.log('section slideshow', section);
  return (
    <Container>
      {section.list.map((image) => (
        <img
          key={image.alt_text}
          css={css`position: absolute; top: 0; left: 0;

 width: 100%; height: 100%;`}
          src={image.image}
          alt={image.alt_text}
        />
      ))}
    </Container>
  );
};
