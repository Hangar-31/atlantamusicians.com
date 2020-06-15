
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import {
  CloseBtnStyled,
  SelectionTagStyled,
} from '../../../../styles/Directory.Styled';

import { ContextDirectory } from '../../../../contexts/context-directory';
import Close from '../../../SVGs/Close';

export default function Selection({ height }) {
  const { filterData, filters, setFilters } = useContext(ContextDirectory);
  const filterDataArray = Object.keys(filterData).reduce(
    (acc, key) => [...acc, ...filterData[key]],
    [],
  );
  const filterArray = Object.keys(filters).reduce(
    (acc, key) => [...acc, ...filters[key]],
    [],
  );
  const removeFilter = (filter) => () => {
    const type = Object.keys(filters).find((key) => filters[key].find((code) => code === filter));
    setFilters({ add: false, filter, type });
  };
  return (
    <div
      css={css`
        height: ${height};
        margin: 1rem 0;

        transition: 0.5s;

        ${height === 0 && 'margin: 0;'}
      `}
    >
      {filterArray.map((filter) => (
        <SelectionTagStyled key={filter}>
          {filter !== 'play' && filter !== 'teach' && (
            <CloseBtnStyled type="button" onClick={removeFilter(filter)}>
              <Close />
            </CloseBtnStyled>
          )}
          <>{filterDataArray.find(({ code }) => code === filter).name}</>
        </SelectionTagStyled>
      ))}
    </div>
  );
}

Selection.propTypes = {
  height: PropTypes.string,
};

Selection.defaultProps = {
  height: 'auto',
};
