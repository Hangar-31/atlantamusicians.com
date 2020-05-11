import React from 'react';
import { css } from '@emotion/core';

export default (text, Component, cssProp) => text.split(/\r?\n/).map((item) => {
  if (item.length === 0) return;
  // eslint-disable-next-line consistent-return
  return <Component css={css`${cssProp}`}>{item}</Component>;
});
