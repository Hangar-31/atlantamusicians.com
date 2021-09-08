// import React, { useState, useContext } from "react";
import React, { useEffect, useState } from 'react';
import { Global, css } from '@emotion/core';
import NavbarMain from '../Navbars/NavbarMain';
import FooterMain from '../Footers/FooterMain';
import NavbarMainMobile from '../Navbars/NavbarMainMobile';

const Layout = ({ children }) => {
  const [isMobile, setMobile] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 992) setMobile(false);
      if (window.innerWidth <= 992) setMobile(true);
    });
  }

  useEffect(() => {
    if (window.innerWidth > 992) setMobile(false);
    if (window.innerWidth <= 992) setMobile(true);
  }, []);

  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,900&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Biryani:300,400,600,800&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Archivo&display=swap');
          body {
            margin: 0;
          }
          * {
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      />
      {!isMobile
      && <NavbarMain />}
      {isMobile
      && <NavbarMainMobile />}
      {children}
      <FooterMain />
    </>
  );
};

export default Layout;
