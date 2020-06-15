import styled from '@emotion/styled';

export const NavStyled = styled.header`
  background-color: ${(props) => props.theme.colorNavBg};

  img {
    vertical-align: middle;
  }
`;

export const NavLinkStyled = styled.a`
  display: inline-block;
  padding: 3rem;

  color: ${(props) => props.theme.colorNavLink};
  font-size: 1.2rem;
  line-height: 2rem;
  text-decoration: none;
  vertical-align: middle;

  transition: 0.2s;

  &.active,
  &:hover {
    color: ${(props) => props.theme.colorNavHover};
  }
`;
