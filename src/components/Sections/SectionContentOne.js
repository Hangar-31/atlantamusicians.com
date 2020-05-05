import React from 'react';
import styled from '@emotion/styled';

const Container = styled.section`
  position: relative;

  width: 100%;
  height: 40vh;
`;
const Wrapper = styled.div`
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 0;
`;


export default ({ section }) => {
  console.log('section content-one', section);
  return (
    <Container>
      <Wrapper />
    </Container>
  );
};
