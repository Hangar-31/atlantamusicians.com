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
@media(max-width: ${mq.xs}px) {
    grid-gap: 10px 0;

  }

`;

const Row = styled.div`
  display: grid;
  grid-column: 2 / span 10;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0 30px;

  @media(max-width: ${mq.md}px) {
    grid-column: 2 / span 10;
  }
  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    grid-gap: 10px 0;
    padding: 0 ;
  }
`;


const Image = styled.figure`
  position: relative;

  display: block;
  width: 210px;
  height: 210px;
  margin: 0;

  background-position: center center;
  background-size: cover;
`;

const BioContent = styled.div`

  display: block;
  flex: 1;
  max-height: 180px;

  margin: 15px 45px 15px 15px;
  overflow: hidden;
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

`;

const Button = styled.button`
  position: absolute;
  right: 0px;
  bottom: 5px;

  color: ${colors.lightOrange};
  font-size: 1.25rem;

  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;


const Bio = styled.article`
  position: relative;

  display: flex;
  flex-direction: row;

  grid-column: span 8;
  align-items: flex-start;
  max-height: 210px;
  overflow: hidden;

  border: 1px solid #DFDFDF;

  @media(max-width: ${mq.md}px) {
    max-height: 100px;
    ${Button} {
      right: -5px;
      bottom: -5px;
    }
    ${BioContent} {
      max-height: 90px;
      margin: 0 15px  0 10px;
    }
    ${Image} {
      width: 100px;
      height: 100px;
    }

    ${Name} {
      margin: 0;

      font-size: 0.875rem;

    }

    ${Title} {
      font-size: 0.625rem;

    }${Text} {
      margin: 5px 0;

      font-size: 0.625rem;

    }

  }

${(props) => props.open && `

    ${Image} {
      display: none;
    }
    ${BioContent} {
      max-height: none !important;
    }
    max-height: none !important;
  `}

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

export const BioComponent = ({ bio, color }) => {
  const [open, setOpen] = useState(false);

  return (
    <Bio css={css`background: ${color};`} open={open}>
      <Image
        css={{
          backgroundImage:
            `url('${bio.image}')`,
        }}
        alt={bio.alt_text}
      />
      <BioContent>
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
