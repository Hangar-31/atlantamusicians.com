import React from 'react';
import styled from '@emotion/styled';
import { Link as GLink } from 'gatsby';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { colors, contact, fonts } from '../../configs/styles';
import ImageLogo2 from '../Images/Logos/ImageLogo2';

// Styled Components

// Join Now

const ContainerJoinNow = styled.section`
  margin-top: 200px;
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
  padding: 15px 0;
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
`;

// Footer

const ContainerFooter = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.blue}
`;

const WrapperFooter = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 0;
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
`;

const FooterLink = styled(GLink)`
  margin: 0 0 10px 0;
  color: ${colors.lightOrange};
  font-weight: 700;
  font-size: 0.75rem;
  font-family: ${fonts.biryani};
  text-transform: uppercase;
  text-decoration: none;
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
  padding: 30px 0;
`;

const ListBottomLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ItemBottomLink = styled.li`
  display: inline-block;
  margin-right: 30px;
`;

const BottomLink = styled(GLink)`
  color: #ffffff;
  font-family: ${fonts.biryani};
  font-size: 0.75rem;
  text-decoration: none;
`;


export default () => (
  <>
    <ContainerJoinNow>
      <WrapperJoinNow>
        <TitleJoinNow>
          Become a Member • &nbsp;
        </TitleJoinNow>
        <LinkJoinNow to="/">Join Now!</LinkJoinNow>
      </WrapperJoinNow>
    </ContainerJoinNow>

    <ContainerFooter>
      <ImageLogo2 cssProp="position: absolute!important; top: 0; right: -2%; height: 100%; width: 42%; overflow: visible;" />

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
