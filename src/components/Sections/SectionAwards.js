import React, { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import { colors, fonts } from '../../configs/styles';
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
  padding: 60px 0;
`;

const Row = styled.div`
  display: grid;
  grid-column: 3 / span 8;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

const Bio = styled.article`
  position: relative;

  display: grid;
  grid-column: span 8;
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

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
`;

const Image = styled.img`
  grid-column: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;

  color: ${colors.lightOrange};
  font-size: 1.25rem;

  background: none;
  border: none;
  outline: none;
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

const BioComponent = ({ bio, color }) => {
  const [open, setOpen] = useState(false);
  let display = 'block';
  let padding = '0px';
  let gridColumn = '6';
  let maxHeight = '85px';
  let background = '#ffffff';
  let textColor = '#000000';

  if (open) {
    display = 'none';
    padding = '45px';
    gridColumn = '8';
    maxHeight = 'initial';
  }
  if (color) {
    background = colors.darkBlue;
    textColor = '#ffffff';
  }
  console.log('bio', bio);

  return (
    <Bio css={css`background: ${background}`}>
      <Image css={css`display: ${display};`} src={bio.image} alt={bio.alt_text} />
      <BioContent css={css`grid-column: span ${gridColumn}; padding-left: ${padding};`}>
        <Name css={css`color: ${textColor};`}>{bio.name}</Name>
        <Title>{bio.title}</Title>
        <div css={css` max-height: ${maxHeight};overflow: hidden;`}>
          {textToComponent(bio.text, Text, `color: ${textColor};`)}
        </div>
      </BioContent>
      <Button type="button" onClick={() => setOpen(!open)}>{open ? <AiFillCaretDown /> : <AiFillCaretUp />}</Button>
    </Bio>
  );
};
