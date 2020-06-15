import styled from '@emotion/styled';
import { ButtonStyled } from './Text.Styled';


import Search from '../components/SVGs/Search';

export const MemberCardStyled = styled.article`
  width: 100%;
  height: 18rem;
  margin-top: 1.5rem;

  overflow: hidden;

  background: ${(props) => props.theme.colorWhite};
`;
export const AvatarStyled = styled.img`
  float: left;
  min-width: 130px;
  min-height: 130px;
  margin-right: 2rem;
`;
export const CardSliderStyled = styled.div`
  position: relative;

  display: flex;

  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  width: 200%;
  height: 100%;
  overflow: hidden;
`;
export const TagsStyled = styled.div`
  position: relative;

  height: ${(props) => (props.open ? 'auto' : '2.9rem')};
  margin: 0;
  overflow: hidden;
`;

export const BioStyled = styled.p`
  display: ${(props) => (props.display ? 'block' : 'none')};
  flex: 1;

  margin: 0;

  color: ${(props) => props.theme.colorHint};
  text-align: justify;
`;

export const CardInfoStyled = styled.div`
  position: relative;
  left: 0;

  width: calc(50% - 70px);
  height: 100%;
  padding: 2rem;

  font-size: 12px;
  line-height: 14px;

  transition: left 0.5s;

  > div {
    flex-basis: 20px;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    overflow: hidden;
  }
`;
export const NameStyled = styled.h1`
  margin-top: 0;
  margin-bottom: 1em;

  color: ${(props) => props.theme.colorDarkGray};
  font-size: 14px;
  line-height: 16px;
`;
export const TagStyled = styled.span`
  display: inline-block;
  margin: 3px 4px;
  padding: 3px 8px;

  color: ${(props) => props.theme.colorDarkGray};

  background: ${(props) => props.theme.colorDisabled};
  border-radius: 4px;
`;

export const ContactItemStyled = styled.p`
  display: flex;
  margin: 0;
  padding: 0 1rem 1rem 0;

  color: ${(props) => props.theme.colorHint};
  svg {
    width: 20px;
    margin-right: 13px;

    vertical-align: middle;
  }
  a {
    color: ${(props) => props.theme.colorHint};
  }
`;

export const ArrowBtnStyled = styled.button`
  position: relative;

  left: ${(props) => (props.right ? 'calc(-50% + 7rem)' : '0')};

  height: 100%;

  margin: 0;
  padding: 0 3rem;

  background: ${(props) => props.theme.colorBtnBg};
  border: none;

  outline: none;

  transform: rotate(${(props) => (props.right ? '180deg' : '0')});
  cursor: pointer;

  transition: left 0.5s;
  :before {
    content: '';

    display: block;
    width: 0;
    height: 0;

    border-width: 1.1rem 0.5rem;
    border-style: solid;
    border-color: transparent ${(props) => props.theme.colorBtnText} transparent
      transparent;
  }
`;

export const TagArrowStyled = styled.button`
  position: absolute;
  top: 3px;
  right: 0;

  width: 1.8rem;
  height: 1.8rem;

  padding: -1px 0 0 0;

  color: ${(props) => props.theme.colorWhite};
  line-height: 1;
  text-align: center;
  vertical-align: middle;

  background-color: ${(props) => props.theme.colorActive};
  border: none;
  border-radius: 50%;
  outline: none;
  transform: rotate(${(props) => (props.open ? '270' : '90')}deg);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colorActiveHover};
  }
`;

export const ArrowStyled = styled.button`
  display: inline-block;
  width: 0;
  height: 0;
  margin: 0 0.5rem;
  padding: 0;

  vertical-align: middle;

  background: none;
  border-width: 0.5rem;
  border-style: solid;
  border-color: transparent ${(props) => props.theme.colorDarkGray} transparent
    transparent;

  outline: none;
  cursor: pointer;

  ${(props) => (props.right ? 'transform: rotate(180deg);' : '')}

  &[disabled] {
    border-right-color: ${(props) => props.theme.colorDisabled};
  }
`;
export const PaginationStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  background-color: ${(props) => props.theme.colorWhite};
`;
export const PagesStyled = styled.div`
  color: ${(props) => props.theme.colorDarkGray};
  line-height: 1em;
`;

export const SelectionTagStyled = styled.span`
  display: inline-block;
  margin: 5px;
  padding: 4px 10px;

  font-size: 10px;
  line-height: 14px;
  vertical-align: middle;

  background-color: ${(props) => props.theme.colorDisabled};

  border-radius: 10px;
`;

export const CloseBtnStyled = styled.button`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  padding: 0;

  color: ${(props) => props.theme.colorWhite};
  line-height: 12px;
  vertical-align: middle;

  background: ${(props) => props.theme.colorNegative};
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  svg {
    position: relative;
    top: -1px;

    display: inline-block;
  }
`;

export const FilteredListContainerStyled = styled.aside`
  background: ${(props) => props.theme.colorOffWhite};
`;

export const FilterListStyled = styled.div`
  margin: 2rem 0 2rem 1.5rem;
  overflow-y: scroll;

  transition: 0.5s;
`;

export const FilterListTitleStyled = styled(ButtonStyled)`
  border-bottom: 1px solid ${(props) => props.theme.colorWhite};
`;

export const IndicatorStyled = styled.span`
  float: right;

  color: ${(props) => props.theme.colorWhite};

  :before {
    content: "${(props) => (props.toggle ? '\\2013' : '\\2b')}";

    display: block;

    transition: 0.5s;
  }
`;

export const SearchContainerStyled = styled.div`
  position: relative;

  flex: 0.5;
`;

export const SearchIconStyled = styled(Search)`
  position: absolute;
  top: 8px;
  left: 15px;
`;

export const SearchInputStyled = styled.input`
  width: 100%;
  padding: 0.9rem 4rem;

  font-size: 12px;
  text-align: center;

  background: ${(props) => props.theme.colorOffWhite};
  border: 1px solid ${(props) => props.theme.colorDisabled};
  border-radius: 20px;
  ::placeholder {
    color: ${(props) => props.theme.colorHint};
    text-transform: uppercase;
  }
  :focus {
    outline: none;
  }
`;
