
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import { FilterListStyled } from '../../../../styles/Directory.Styled';

import { ContextDirectory } from '../../../../contexts/context-directory';
import InputCheckBox from '../../../Inputs/InputCheckBox';

export default function List({ height, items, type }) {
  const { filters, setFilters } = useContext(ContextDirectory);
  return (
    <FilterListStyled
      css={css`
        height: ${height};
        ${height === 0 && 'margin: 0 1.5rem'}
      `}
    >
      {items
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((item) => (
          <InputCheckBox
            labelCSS={{ margin: 0, padding: 0 }}
            labelText={item.name}
            key={item.code}
            inputValue={item.code}
            inputOnChange={(e) => {
              setFilters({ add: e.target.checked, filter: item.code, type });
            }}
            checkOn={filters[type].find((code) => code === item.code)}
          />
        ))}
    </FilterListStyled>
  );
}

List.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  type: PropTypes.string,
};

List.defaultProps = {
  height: '20vh',
  items: [],
  type: '',
};
