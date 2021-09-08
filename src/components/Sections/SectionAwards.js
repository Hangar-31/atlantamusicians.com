import React from 'react';
import styled from '@emotion/styled';

import { BioComponent } from './SectionBios';
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
  padding: 20px 0;

  @media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;
  }
`;

const Row = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0 30px;


  @media(max-width: ${mq.md}px) {
    grid-column:  2 / span 10;
  }
  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    grid-gap: 10px 0;
    padding: 0 15px;
  }
`;

export default ({ section, currentYear }) => (
  <>
    {section.year === currentYear && (
    <Container>
      <Grid>
        <Row>
          {section.list.length > 0 && section.list.map((bio, i) => (
            <BioComponent
              bio={bio}
              color={section.background_color_toggle ? i % 2 !== 0 : false}
            />
          ))}
        </Row>
      </Grid>
    </Container>

    )}
  </>
);
