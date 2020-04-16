// import React, { useState, useContext } from "react";
import React from 'react';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
          body {
            margin: 0;
          }
        `}
    />
    {children}
  </>
);


export default Layout;
