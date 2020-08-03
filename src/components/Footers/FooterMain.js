import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link as GLink } from 'gatsby';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
  colors, contact, fonts, mq,
} from '../../configs/styles';
import ImageLogo2 from '../Images/Logos/ImageLogo2';

// Styled Components

// Join Now

const ContainerJoinNow = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.lightBlue}
`;

const WrapperJoinNow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 15px;
  @media(max-width: ${mq.xs}px) {
    justify-content: center;
    text-align: center;
  }
`;

const TitleJoinNow = styled.h2`
  color: #ffffff;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
`;

const LinkJoinNow = styled(GLink)`
  color: ${colors.lightOrange};
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${fonts.montserrat};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;

// Footer

const ContainerFooter = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${colors.blue}
`;

const WrapperFooter = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;

  @media(max-width: ${mq.xl}px) {
    padding: 30px 15px;
  }
  @media(max-width: ${mq.md}px) {
    grid-column-gap: 60px;
  }
  @media(max-width: ${mq.sm}px) {
    grid-row-gap: 30px;
    grid-column-gap: 30px;
  }
  @media(max-width: ${mq.xs}px) {
    height: 750px;
    grid-auto-rows: max-content;
    grid-row-gap: 45px;
  }
  
`;

const Line = styled.div`
  width: 2px;
  background: #ffffff;
`;

const FooterColumn = styled.section`
  grid-column: span 3;
  display: grid;
  grid-template-columns: 25% 1% 74%;
  grid-column-gap: 10px;

  @media(max-width: ${mq.lg}px) {
    grid-column: span 4;
  }
  @media(max-width: ${mq.sm}px) {
    grid-column: span 6;
  }
  @media(max-width: ${mq.xs}px) {
    grid-column: span 12;
    grid-template-columns: 35% 1% 64%;
  }
  @media(max-width: ${mq.xxs}px) {
    grid-column: span 12;
    grid-template-columns: 25% 1% 74%;
  }
`;

const ListFooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemFooterLinks = styled.li`
  margin-bottom: 10px;
`;

const FooterTitle = styled.h3`
  margin-top: 15px;
  justify-self: flex-end;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.75rem;
  font-family: ${fonts.montserrat};
  text-transform: uppercase;
`;

const FooterText = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 0.75rem;
  font-family: ${fonts.nunitoSans};
  margin: 0px;

  @media(max-width: ${mq.md}px) {
    white-space: nowrap;
  }
  @media(max-width: ${mq.sm}px) {
    white-space: wrap;
  }
`;

const FooterLink = styled(GLink)`
  margin: 0 0 10px 0;
  color: ${colors.lightOrange};
  font-weight: 700;
  font-size: 0.75rem;
  font-family: ${fonts.biryani};
  text-transform: uppercase;
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    opacity: 0.75;
  }

  @media(max-width: ${mq.md}px) {
    white-space: nowrap;
  }
  @media(max-width: ${mq.sm}px) {
    white-space: wrap;
  }
`;


// Bottom

const ContainerBottom = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.darkBlue}
`;

const WrapperBottom = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 15px;
`;

const ListBottomLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media(max-width: ${mq.xs}px) {
    text-align: center;
  }
`;

const ItemBottomLink = styled.li`
  display: inline-block;
  margin-right: 30px;

  @media(max-width: ${mq.xs}px) {
    margin-right: 15px;
  }
`;

const BottomLink = styled(GLink)`
  color: #ffffff;
  font-family: ${fonts.biryani};
  font-size: 0.75rem;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;


export default () => (
  <>
    <ContainerJoinNow>
      <WrapperJoinNow css={css`
            @media(max-width: ${mq.xs}px) {
              display: none;
            }
        `}
      >
        <TitleJoinNow>
          Become a Member • &nbsp;
        </TitleJoinNow>
        <LinkJoinNow to="/">Join Now!</LinkJoinNow>
      </WrapperJoinNow>

      <WrapperJoinNow css={css`
          display: block;
            @media(min-width: ${mq.xs}px) {
              display: none;
            }
        `}
      >
        <TitleJoinNow>
          Become a Member
        </TitleJoinNow>
        <br />
        <LinkJoinNow to="/">Join Now!</LinkJoinNow>
      </WrapperJoinNow>
    </ContainerJoinNow>

    <ContainerFooter>
      <ImageLogo2 cssProp={`
        position: absolute!important;
        top: 0;
        right: -2%;
        height: 100%;
        width: 775px;
        overflow: visible;

        @media(max-width: ${mq.xl}px) {
          width: 610px;
          padding: 30px 0;
        }
        @media(max-width: ${mq.lg}px) {
          opacity: 0.5;
        }
        @media(max-width: ${mq.sm}px) {
          height: 150px;
          width: 415px;
          top: initial;
          bottom: 0;
          opacity: 1;
        }
        @media(max-width: ${mq.xs}px) {
          height: 150px;
          width: 415px;
          margin: 0 auto;
          left: 0;
          right: 0;
          opacity: 1;
        }
        
      `}
      />

      <WrapperFooter>

        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <Line />
          <div>
            <FooterText>{contact.name}</FooterText>
            <FooterText>{contact.address.street1}</FooterText>
            <FooterText>
              {`${contact.address.city}, ${contact.address.state} ${contact.address.zip}`}
            </FooterText>
            <br />
            <FooterText>{`Call ${contact.phone}`}</FooterText>
            <FooterText>{contact.email}</FooterText>
            <br />
            <FooterText>Office Hours:</FooterText>
            <FooterText>{contact.hours}</FooterText>
          </div>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <Line />
          <ListFooterLinks>
            <ItemFooterLinks>
              <FooterLink to="/">Member Log-In</FooterLink>
            </ItemFooterLinks>
            <ItemFooterLinks>
              <FooterLink to="/">About Us</FooterLink>
            </ItemFooterLinks>
            <ItemFooterLinks>
              <FooterLink to="/">Union Benefits</FooterLink>
            </ItemFooterLinks>
            <ItemFooterLinks>
              <FooterLink to="/">Hire A Musician</FooterLink>
            </ItemFooterLinks>
            <ItemFooterLinks>
              <FooterLink to="/">Non Member / Make Payment</FooterLink>
            </ItemFooterLinks>

          </ListFooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Socials</FooterTitle>
          <Line />
          <ListFooterLinks>
            <ItemFooterLinks>
              <FooterLink to="/press">Press</FooterLink>
            </ItemFooterLinks>

            <ItemFooterLinks>
              <FooterLink to="/press">Blog</FooterLink>
            </ItemFooterLinks>

            <ItemFooterLinks>
              <FooterLink to="/press">
                Facebook &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {' '}
                <FaFacebookF />
              </FooterLink>
            </ItemFooterLinks>

            <ItemFooterLinks>
              <FooterLink to="/press">
                Instagram &nbsp;&nbsp;&nbsp;
                {' '}
                <FaInstagram />
              </FooterLink>
            </ItemFooterLinks>
          </ListFooterLinks>
        </FooterColumn>
      </WrapperFooter>
    </ContainerFooter>

    <ContainerBottom>
      <WrapperBottom>
        <ListBottomLinks>
          <ItemBottomLink>
            <BottomLink to="/copyright">Copyright</BottomLink>
          </ItemBottomLink>

          <ItemBottomLink>
            <BottomLink to="/terms-of-service">Terms of Service</BottomLink>
          </ItemBottomLink>

          <ItemBottomLink>
            <BottomLink to="/privacy-policy">Privacy Policy</BottomLink>
          </ItemBottomLink>
        </ListBottomLinks>
      </WrapperBottom>
    </ContainerBottom>
  </>
);
