import {
  LabelStyled,
  SelectArrowStyled,
  SelectStyled,
} from '../../styles/Form.Styled';

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { css } from '@emotion/core';

const InputDropDown = ({
  required,
  columns,
  labelText,
  inputName,
  inputValue = '',
  inputOnChange,
  inputCSS,
  optionsValue = [],
  optionsText = [],
}) => {
  const [active, setActive] = useState(inputValue.length > 0);
  const id = inputName;
  return (
    <LabelStyled
      css={{
        gridColumn: `span ${columns}`,
      }}
      htmlFor={id}
    >
      <SelectStyled
        id={id}
        required={required}
        name={inputName}
        onBlur={e => {
          if (active && e.target.value.length === 0) {
            setActive(false);
          }
        }}
        onFocus={() => {
          if (!active) {
            setActive(true);
          }
        }}
        onChange={inputOnChange}
        value={inputValue}
        css={css`
          ${inputCSS}
        `}
      >
        <option value="" disabled>
          {(required ? '*' : '') + labelText}
        </option>
        {optionsText.length === 0 &&
          optionsValue.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        {optionsText.length !== 0 &&
          optionsValue.map((item, i) => (
            <option value={item} key={optionsText[i]}>
              {optionsText[i]}
            </option>
          ))}
      </SelectStyled>
      <SelectArrowStyled />
    </LabelStyled>
  );
};

InputDropDown.defaultProps = {
  columns: '4',
  inputCSS: '',
  inputName: '',
  inputOnChange: undefined,
  inputValue: '',
  labelText: '',
  optionsText: [],
  optionsValue: [],
  required: false,
};

InputDropDown.propTypes = {
  columns: PropTypes.string,
  inputCSS: PropTypes.string,
  inputName: PropTypes.string,
  inputOnChange: PropTypes.func,
  inputValue: PropTypes.string,
  labelText: PropTypes.string,
  optionsText: PropTypes.arrayOf(PropTypes.string),
  optionsValue: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
};

export default InputDropDown;
