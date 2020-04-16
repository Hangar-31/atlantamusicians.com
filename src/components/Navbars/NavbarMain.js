import React from 'react';
import styled from '@emotion/styled';

// Components
import { Link as GLink } from 'gatsby';
import ImageLogo1 from '../Images/Logos/ImageLogo1';
import { colors } from '../../configs/styles';

// Styled Components
const Container = styled.section`
  position: relative;
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
  max-width: 1440px;
  padding: 30px 0;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 300px;
`;

const ListLinks = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
`;

const ItemLink = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 30px;
`;

const ListSubLinks = styled.ul`
  position: absolute;
  top: 60px;
  list-style: none;
  padding: 0;
  background: #324B93;
`;

const ItemSubLink = styled.li`
  position: relative;
  display: block;
`;

const Link = styled(GLink)`
  color: #ffffff;
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

export default () => (
  <Container>
    <Wrapper>
      <Logo>
        <ImageLogo1 cssProp="width: 100%;" />
      </Logo>

      <ListLinks>
        {links.map((link) => (
          <ItemLink key={link.name}>
            <Link to={`/${formatLink(link.name)}`}>{link.name}</Link>

            {link.subLinks.length > 0
              && (
              <ListSubLinks>
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
