import { ActiveLabelStyled, InputStyled } from '../../styles/Form.Styled';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const InputText = ({
  Input,
  columns,
  inputName,
  inputOnChange,
  inputProps,
  inputValue,
  labelCSS,
  labelText,
  required,
  type,
}) => {
  const [active, setActive] = useState(
    inputValue.length > 0 || type === 'date' || type === 'tel'
  );

  useEffect(() => {
    if (inputValue.length) setActive(true);
  }, [inputValue]);

  const id = inputName;

  return (
    <ActiveLabelStyled
      css={{
        gridColumn: `span ${columns}`,
        ...labelCSS,
      }}
      htmlFor={id}
      active={active}
      text={(required ? '*' : '') + labelText}
    >
      <Input
        id={id}
        required={required}
        type={type}
        name={inputName}
        onBlur={e => {
          if (
            active &&
            e.target &&
            e.target.value.length === 0 &&
            type !== 'date' &&
            type !== 'tel'
          ) {
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
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...inputProps}
      />
    </ActiveLabelStyled>
  );
};

InputText.defaultProps = {
  columns: '4',
  containerCSS: '',
  Input: InputStyled,
  inputCSS: '',
  inputName: '',
  inputOnChange: undefined,
  inputProps: {},
  inputValue: '',
  labelCSS: {},
  labelText: '',
  required: false,
  type: 'text',
};

InputText.propTypes = {
  columns: PropTypes.string,
  containerCSS: PropTypes.string,
  Input: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object,
    PropTypes.any,
  ]),
  inputCSS: PropTypes.string,
  inputName: PropTypes.string,
  inputOnChange: PropTypes.func,
  inputProps: PropTypes.objectOf(PropTypes.any),
  inputValue: PropTypes.string,
  labelCSS: PropTypes.objectOf(PropTypes.any),
  labelText: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password', 'date']),
};

export default InputText;
