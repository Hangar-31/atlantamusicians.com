import React from 'react';
import styled from '@emotion/styled';
import { colors, contact } from '../../configs/styles';

// Styled Components
const ContainerJoinNow = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.lightBlue}
`;

const WrapperJoinNow = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 15px 0;
`;

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
  padding: 30px 0;
`;

const Line = styled.div`
  width: 2px;
  background: #ffffff;
`;

const FooterContact = styled.section`
  grid-column: span 3;
  display: grid;
  grid-template-columns: 2fr 1fr 5fr;
  grid-column-gap: 10px;
`;

const ContainerBottom = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.darkBlue}
`;

const WrapperBottom = styled.div`
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 15px 0;
`;


export default () => (
  <>
    <ContainerJoinNow>
      <WrapperJoinNow />
    </ContainerJoinNow>

    <ContainerFooter>
      <WrapperFooter>
        <FooterContact>
          <h1>Contact</h1>
          <Line />
          <div>
            <p>{contact.name}</p>
            <p>{contact.address.street1}</p>
            <p>
              {`${contact.address.city}, ${contact.address.state} ${contact.address.zip}`}
            </p>
            <br />
            <p>{`Call ${contact.phone}`}</p>
            <p>{contact.email}</p>
            <br />
            <p>Office Hours:</p>
            <p>{contact.hours}</p>
          </div>
        </FooterContact>
      </WrapperFooter>
    </ContainerFooter>

    <ContainerBottom>
      <WrapperBottom />
    </ContainerBottom>
  </>
);
