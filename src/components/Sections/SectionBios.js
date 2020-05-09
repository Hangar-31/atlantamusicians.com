import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import { colors, fonts } from '../../configs/styles';

const Container = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;
`;

const Row = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Bio = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-column: span 8;
  border: 1px solid #DFDFDF;
`;

const BioContent = styled.div`
  grid-column: span 6;
  padding: 15px 45px 15px 15px;
`;

const Name = styled.h3`
  margin: 5px 0;
  color: ${colors.darkBlue};
  font-family: ${fonts.biryani};
`;

const Title = styled.h4`
  margin: 5px 0;
  color: ${colors.lightBlue};
  font-family: ${fonts.biryani};
`;

const Text = styled.p`
  font-family: ${fonts.nunitoSans};
  overflow: hidden;
`;

const Image = styled.img`
  grid-column: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 1.25rem;
  background: none;
  border: none;
  outline: none;
  color: ${colors.lightOrange};
`;


export default ({ section }) => (
  <Container>
    <Grid>
      <Row>
        {section.list.length > 0 && section.list.map((bio) => (
          <BioComponent bio={bio} />
        ))}
      </Row>
    </Grid>
  </Container>

);

const BioComponent = ({ bio }) => {
  const [open, setOpen] = useState(false);
  return (
    <Bio>
      <Image css={css`display: ${open ? 'none' : 'block'};`} src={bio.image} alt={bio.alt_text} />
      <BioContent css={css`grid-column: span ${open ? '8' : '6'}; padding-left: ${open ? '45px' : '0'};`}>
        <Name>{bio.name}</Name>
        <Title>{bio.title}</Title>
        <Text css={css`max-height: ${open ? 'initial' : '90px'};`}>{bio.text}</Text>
      </BioContent>
      <Button type="button" onClick={() => setOpen(!open)}>{open ? <AiFillCaretDown /> : <AiFillCaretUp />}</Button>
    </Bio>
  );
};
