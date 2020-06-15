import styled from '@emotion/styled';
import { CardStyled, ContainerFile } from './Card.Styled';
import { NameStyled } from './Directory.Styled';
import { Heading2Styled } from './Text.Styled';


export const MembershipStatusStyled = styled.div`
  padding: 1.5rem;

  color: ${(props) => props.theme.colorWhite};
  font-weight: bold;
  font-size: 2.8rem;
  text-align: center;
  text-transform: uppercase;

  background-color: ${(props) => props.theme.colorNavBg};
  border: 1px solid ${(props) => props.theme.colorWhite};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;

export const UserCardStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 13rem;
  margin: 2rem 0;

  background: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  ${NameStyled} {
    padding-top: 1rem;
    padding-right: 2.5rem;
  }
  img {
    float: none;
    height: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
  }
`;

export const EditStyled = styled.button`
  float: right;

  color: ${(props) => props.theme.colorActive};
  text-transform: uppercase;

  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colorActiveHover};
  }
`;

export const ChargedText = styled.span`
  padding-left: 1em;

  color: ${(props) => (props.positive === true
    ? props.theme.colorPositive
    : props.theme.colorNegative)};
  text-transform: uppercase;
`;
export const DirectoryStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  padding: 1.2rem 2.5rem;

  text-transform: uppercase;

  background: ${(props) => props.theme.colorWhite};
  border: 1px solid ${(props) => props.theme.colorWhite};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${ChargedText} {
    flex: 1;
  }
`;

export const CardRowStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;

  ${CardStyled} {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    &:first-of-type {
      margin-right: 3rem;
    }
    ${ContainerFile} {
      height: 10rem;
      margin-top: 1rem;
    }
  }
`;

export const DashboardHeadingStyled = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  color: ${(props) => props.theme.colorHint};
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;

  &:before,
  &:after {
    display: block;
    flex: 1;

    border-bottom: 1px solid ${(props) => props.theme.colorHint};
    content: '';
  }
  &:before {
    margin-right: 1rem;
  }
  &:after {
    margin-left: 1rem;
  }
`;

export const PlanStyled = styled.p`
  color: ${(props) => props.theme.colorDarkGray};
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
  text-transform: uppercase;
`;

export const PaidInvoiceStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;

  background-color: ${(props) => props.theme.colorWhite};

  div {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    color: ${(props) => props.theme.colorHint};
    font-weight: bold;
    text-transform: uppercase;

    background: ${(props) => props.theme.colorOffWhite};
    border: 1px solid ${(props) => props.theme.colorDisabled};
    p {
      flex: 0.9;
    }
  }
`;

export const StackedDateStyled = styled.time`
  margin: 0 3rem;

  color: ${(props) => props.theme.colorBlack};
  font-weight: 900;
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
  span {
    display: block;

    font-size: 2.4rem;
  }
`;

export const MeetingCardsStyled = styled.section`
  padding: 1rem;

  background: ${(props) => props.theme.colorWhite};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
`;

export const MeetingCardStyled = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 1rem;
  padding: 2rem 2.5rem;

  background: ${(props) => props.theme.colorOffWhite};
  border: 1px solid ${(props) => props.theme.colorDisabled};

  ${(props) => props.lg === true && 'padding: 4rem 3.5rem 8rem 3.5rem; margin: 4rem 0;'}

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  ${Heading2Styled} {
    margin: 0;

    color: ${(props) => props.theme.colorDarkGray};

    border-bottom: none;
  }
  ${StackedDateStyled} {
    margin: 0 2rem 0 0;
  }

  p {
    align-self: center;
    width: 50%;

    color: ${(props) => props.theme.colorHint};
  }
`;

export const ListStyled = styled.ul`
  margin: 0;
  padding-left: 1em;

  color: ${(props) => props.theme.colorHint};
  line-height: 2;

  list-style-type: '◼';

  li {
    padding-left: 1em;
  }
  a {
    color: ${(props) => props.theme.colorHint};
  }
`;
