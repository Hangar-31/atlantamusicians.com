import styled from '@emotion/styled';

export const SidebarStyled = styled.aside`
  grid-column: span 2;
  align-self: stretch;
  min-width: 200px;
  margin-top: -15px;

  background: ${(props) => props.theme.colorOffWhite};
  div {
    position: sticky;
    top: 20px;
  }

  button {
    display: block;
    width: 100%;
    margin: 20px 0;
    padding-right: 4rem;

    color: ${(props) => props.theme.colorDisabled};
    font-weight: bold;
    text-align: right;
    text-transform: uppercase;

    background: none;
    border: 0;
    outline: none;
    cursor: pointer;

    &.active,
    &:hover {
      color: ${(props) => props.theme.colorBlack};
    }
  }
`;

export const SidebarFixedStyled = styled(SidebarStyled)`
  position: fixed;
  top: 8rem;

  height: calc(100vh - 8rem);

  margin: 0;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.2s;
`;
export const SidebarLinkStyled = styled.a`
  display: block;
  width: 100%;
  margin: 20px 0;
  padding-right: 4rem;

  color: ${(props) => props.theme.colorDisabled};
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;

  cursor: pointer;
  &.active,
  &:hover {
    color: ${(props) => props.theme.colorBlack};
  }
`;

export const SidebarBackButtonStyled = styled.a`
  display: block;
  padding: 2rem;

  color: ${(props) => props.theme.colorHint};
  font-weight: bold;
  font-size: 2.4rem;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;

  background-color: ${(props) => props.theme.colorDisabled};
  cursor: pointer;
`;
