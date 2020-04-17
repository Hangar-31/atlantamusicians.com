// import React, { useState, useContext } from "react";
import React from 'react';
import { Global, css } from '@emotion/core';
import NavbarMain from '../Navbars/NavbarMain';
import FooterMain from '../Footers/FooterMain';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Biryani:300,400,600&display=swap');
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
    <NavbarMain />
    {children}
    <FooterMain />
  </>
);


export default Layout;
