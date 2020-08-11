import React from 'react';
import styled from '@emotion/styled';

import { colors, fonts } from '../../configs/styles';

const Container = styled.section`
  width: 100%;
`;


const Row = styled.div`
 margin-top: 20px;

 text-align: center;
`;

const Year = styled.button`
  display: inline-block;
  padding: 0 20px;

  color: #c4c4c4;
  font-weight: 500;
  font-family: ${fonts.montserrat};
  line-height: 22px;

  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  transition: all 0.2s;

  user-select: none;

 ${(props) => props.active && `
    color: ${colors.darkBlue};
    font-size: 18px;
  `}
`;


export default ({ years, setYear, currentYear }) => (
  <Container>
    <Row>
      {years.map((year) => (
        <Year type="button" onClick={() => setYear(year)} active={year === currentYear}>{year}</Year>
      ))}
    </Row>
  </Container>

);
