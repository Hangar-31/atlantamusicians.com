/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaCaretDown } from 'react-icons/fa';

// Components
import { Link as GLink } from 'gatsby';
import { css } from '@emotion/core';
import ImageLogo1 from '../Images/Logos/ImageLogo1';
import { colors } from '../../configs/styles';

// Styled Components
const Container = styled.section`
  position: relative;
  height: 120px;
  width: 100%;
  background: ${colors.blue};
  border-bottom: 1px solid #ffffff;
  box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.6);
`;

const Wrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 300px;
`;

const ListLinks = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0;
  list-style: none;
  text-transform: uppercase;
`;

const ItemLink = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 30px;
`;

const ListSubLinks = styled.ul`
  display: none;
  z-index: 1;
  position: absolute;
  width: 180px;
  top: 100%;
  left: -25px;
  margin: 0;
  padding: 15px;
  background: #324B93;

  list-style: none;
`;

const ItemSubLink = styled.li`
  position: relative;
  display: block;
`;

const Link = styled(GLink)`
  display: inline-table;
  color: #ffffff;
  font-size: 0.75rem;
  font-family: Montserrat;
  font-weight: regular;
  text-decoration: none;
`;

// Data
const links = [
  {
    name: 'AFM Home',
    subLinks: [],
  },
  {
    name: 'About',
    subLinks: [
      {
        name: 'About Us',
      },
    ],
  },
  {
    name: 'Membership',
    subLinks: [
      {
        name: 'Join Our Local',
      },
    ],
  },
  {
    name: 'Resources',
    subLinks: [
      {
        name: 'Hire Local Musicians',
      },
    ],
  },
  {
    name: 'Blog',
    subLinks: [],
  },
  {
    name: 'Contact',
    subLinks: [],
  },
];

// Functions
const formatLink = (linkName) => linkName.toLowerCase().replace(new RegExp(' ', 'g'), '-');

export default () => {
  const [activeSubMenu, setActiveSubMenu] = useState(-1);

  return (
    <Container>
      <Wrapper>
        <Logo>
          <ImageLogo1 cssProp="width: 100%;" />
        </Logo>

        <ListLinks onMouseLeave={() => setActiveSubMenu(-1)}>
          {links.map((link, i) => (
            <ItemLink
              key={link.name}
              onMouseOver={() => {
                if (link.subLinks.length === 0) {
                  setActiveSubMenu(-1);
                } else if (link.subLinks.length > 0 && activeSubMenu >= 0) {
                  setActiveSubMenu(i);
                }
              }}
              onFocus={() => {
                if (link.subLinks.length === 0) {
                  setActiveSubMenu(-1);
                } else if (link.subLinks.length > 0 && activeSubMenu >= 0) {
                  setActiveSubMenu(i);
                }
              }}
            >
              <Link
                to={`/${formatLink(link.name)}`}
                onMouseOver={() => setActiveSubMenu(i)}
                onFocus={() => setActiveSubMenu(i)}
              >
                {`${link.name} `}
                {link.subLinks.length > 0 ? <FaCaretDown css={css`height: 12px;`} /> : ''}
              </Link>

              {link.subLinks.length > 0
              && (
              <ListSubLinks
                css={css`
                  display: ${activeSubMenu === i ? 'block' : 'none'}
                `}
              >
                {link.subLinks.map((subLink) => (
                  <ItemSubLink key={subLink.name}>
                    <Link to={`/${formatLink(link.name)}/${formatLink(subLink.name)}`}>{subLink.name}</Link>
                  </ItemSubLink>
                ))}
              </ListSubLinks>
              )}
            </ItemLink>
          ))}
        </ListLinks>
      </Wrapper>
    </Container>
  );
};
