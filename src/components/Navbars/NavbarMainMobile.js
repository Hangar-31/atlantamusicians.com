/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaCaretDown } from 'react-icons/fa';
import { FcMenu } from 'react-icons/fc';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Components
import { Link as GLink, useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import ImageLogo1 from '../Images/Logos/ImageLogo1';
import { colors, fonts, mq } from '../../configs/styles';

// Styled Components
const Container = styled.section`
  position: relative;
  height: 120px;
  width: 100%;
  background: ${colors.blue};
  border-bottom: 1px solid #ffffff;
  box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.6);

  @media(min-width: ${mq.md}px) {
    display: none;
  }
  @media(MAX-width: ${mq.md}px) {
    height: 90px;
  }
  @media(MAX-width: ${mq.xs}px) {
    height: 75px;
  }
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

const Logo = styled(GLink)`
  display: block;
  padding-left: 15px;
  width: 300px;
  text-decoration: none;
  @media(max-width: ${mq.lg}px) {
    width: 250px;
  }
`;

const ListLinks = styled.ul`
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.darkBlue};
  height: 100vh;
  width: 250px;
  padding: 30px;
  margin: 0;
  list-style: none;
  text-transform: uppercase;
`;

const ItemLink = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  text-align: left;
  margin: 0 0 20px 0px;
`;

const ListSubLinks = styled.ul`
  z-index: 1;
  display: none;
  position: relative;
  width: 100%;
  margin: 0 0 15px 0;
  padding-left: 20px;

  list-style: none;
`;

const Link = styled(GLink)`
  display: inline-table;
  color: #ffffff;
  font-size: 0.75rem;
  font-family: Montserrat;
  font-weight: regular;
  text-decoration: none;
`;

const StyledLink = styled(GLink)`
  position: relative;
  color: #ffffff;
  font-size: 0.75rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
  text-decoration: none;
  
  &:hover {
    span {
      background: ${colors.darkBlue};
    }
  }

  span {
    display: block;
    position: relative;
    height: 100%;
    width: 100%;
    padding: 10px 20px;
    background: ${colors.blue};
    transition: 0.2s;
  }

  &:before {
    z-index: 0;
    position: absolute;
    content: "";
    display: block;
    top: -1px;
    left: -1px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background: linear-gradient(180deg, #EC4067 0%, #FFAFA3 100%);
  }
`;

export default () => {
  // eslint-disable-next-line no-unused-vars
  const [mobileVisible, setMobileVisible] = useState(false);
  const [links, setLinks] = useState([]);
  const [activeSubMenu, setActiveSubMenu] = useState(-1);
  const { allMarkdownRemark: data } = useStaticQuery(graphql`
    query MobileNav {
      allMarkdownRemark(filter: {frontmatter: {path: {ne: null}}}, sort: {fields: frontmatter___number, order: ASC}) {
        nodes {
          frontmatter {
            title
            path
          }
        }
      }
    }
  `);

  useEffect(() => {
    const pathLinks = [];
    data.nodes.forEach((node) => {
      const { path, title } = node.frontmatter;
      const pathSplit = path.split('/');

      if (pathSplit.length === 2) {
        pathLinks.push({
          name: title,
          path: pathSplit[1],
          subLinks: [],
        });
      }
      if (pathSplit.length === 3) {
        if (pathLinks.filter((item) => item.name === pathSplit[1]).length === 0) {
          pathLinks.push({
            name: pathSplit[1],
            path,
            subLinks: [
              {
                name: title,
                path,
              },
            ],
          });
        } else {
          pathLinks.filter((item) => item.name === pathSplit[1])[0].subLinks.push({
            name: title,
            path,
          });
        }
      }
    });

    // Data
    setLinks(pathLinks);
  }, []);


  return (
    <Container>
      <Wrapper>
        <Logo>
          <ImageLogo1 to="/" cssProp="width: 100%;" />
        </Logo>

        <button
          css={css`
            padding-right: 40px;
            font-size: 2.5rem;
            background: none;
            outline: none;
            border: none;
            cursor: pointer;
            transition: 0.2s;

            g {
              fill: #ffffff;
            }

            @media (max-width: ${mq.xs}px) {
              padding-right: 15px;
            }

          `}
          type="button"
          onClick={() => setMobileVisible(true)}
        >
          <FcMenu />
        </button>
      </Wrapper>

      <ListLinks
        css={css`
            transform: ${mobileVisible ? 'translateX(0px)' : 'translateX(250px)'};
            transition: 0.4s;
          `}
        onMouseLeave={() => setActiveSubMenu(-1)}
      >
        <ItemLink>
          <button
            css={css`
              margin: 0;
              padding: 0;
              font-size: 2rem;
              background: none;
              outline: none;
              border: none;
              cursor: pointer;
              transition: 0.2s;
              svg {
                fill: #ffffff;
              }
            `}
            type="button"
            onClick={() => setMobileVisible(false)}
          >
            <AiOutlineCloseCircle />
          </button>
        </ItemLink>

        {links.map((link, i) => (
          <>
            <ItemLink
              key={link.name}
              onClick={() => {
                if (link.subLinks.length === 0) {
                  setActiveSubMenu(-1);
                } else if (link.subLinks.length > 0 && activeSubMenu >= 0) {
                  setActiveSubMenu(i);
                }
              }}
            >
              <Link
                to={link.path}
                onClick={(e) => {
                  if (link.subLinks.length > 0) {
                    e.preventDefault();
                    setActiveSubMenu(i);
                  }
                }}
              >
                {`${link.name} `}
                {link.subLinks.length > 0 ? <FaCaretDown css={css`height: 12px;`} /> : ''}
              </Link>
            </ItemLink>

            {link.subLinks.length > 0
              && (
              <ListSubLinks
                css={css`
                  display: ${activeSubMenu === i ? 'block' : 'none'}
                `}
              >
                {link.subLinks.map((subLink) => (
                  <ItemLink key={subLink.name}>
                    <Link to={subLink.path}>{subLink.name}</Link>
                  </ItemLink>
                ))}
              </ListSubLinks>
              )}
          </>
        ))}

        <ItemLink>
          <StyledLink to="/">
            <span>
              Join Now
            </span>
          </StyledLink>
        </ItemLink>
      </ListLinks>
    </Container>
  );
};
