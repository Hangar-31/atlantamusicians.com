import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import { colors, fonts, mq } from '../../configs/styles';
import textToComponent from '../../utilities/text-to-component';

const Container = styled.section`
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px 15px 15px;
`;

const Row = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  @media(max-width: ${mq.sm}px) {
    grid-column: span 12;
  }
`;

const Bio = styled.article`
  position: relative;
  grid-column: span 12;
  border: 1px solid #DFDFDF;

`;

const Image = styled.img`
  position: relative;
  display: inline-block;
  float: left;
  object-fit: cover;
  max-width: 50px;
  height: 100%;
`;

const BioContent = styled.div`
  position: relative;
  display: inline-block;
  float: right;
  padding: 15px 45px 15px 15px;
`;

const Name = styled.h3`
  margin: 5px 0;
  color: ${colors.darkBlue};
  font-family: ${fonts.biryani};

  @media(max-width: ${mq.xs}px) {
    margin: 0;
  }
`;

const Title = styled.h4`
  margin: 5px 0;
  color: ${colors.lightBlue};
  font-family: ${fonts.biryani};

  @media(max-width: ${mq.xs}px) {
    margin: 0;
  }
`;

const Text = styled.p`
  font-family: ${fonts.nunitoSans};
  max-height: 90px;
  overflow: hidden;

  @media(max-width: ${mq.xs}px) {
    font-size: 0.875rem;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 5px;
  right: 0px;
  font-size: 1.25rem;
  background: none;
  border: none;
  outline: none;
  color: ${colors.lightOrange};
  cursor: pointer;
`;


export default ({ section }) => (
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

);

const BioComponent = ({ bio, color }) => {
  const [open, setOpen] = useState(false);

  return (
    <Bio css={css`background: ${color};`}>
      <BioContent>
        <Image src={bio.image} alt={bio.alt_text} />
        <Name>{bio.name}</Name>
        <Title>{bio.title}</Title>
        <div>
          {textToComponent(bio.text, Text, 'color: #000000;')}
        </div>
      </BioContent>
      <Button type="button" onClick={() => setOpen(!open)}>{open ? <AiFillCaretUp /> : <AiFillCaretDown />}</Button>
    </Bio>
  );
};
