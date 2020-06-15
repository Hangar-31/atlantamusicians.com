
import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckBoxCheckStyled,
  CheckBoxInputStyled,
  LabelStyled,
} from '../../styles/Form.Styled';

const InputCheckBox = ({
  checkOn,
  columns,
  inputCSS,
  inputName,
  inputOnChange,
  inputValue,
  labelCSS,
  labelText,
  required,
  type,
}) => {
  const id = inputName + inputValue;
  return (
    <LabelStyled
      htmlFor={id}
      css={{
        gridColumn: `span ${columns}`,
        padding: '1rem 0',
        ...labelCSS,
      }}
    >
      <CheckBoxInputStyled
        id={id}
        required={required}
        type={type}
        name={inputName}
        onChange={inputOnChange}
        value={inputValue}
        css={inputCSS}
        checked={checkOn === inputValue}
      />
      <CheckBoxCheckStyled />
      {(required ? '*' : '') + labelText}
    </LabelStyled>
  );
};

InputCheckBox.defaultProps = {
  checkOn: true,
  columns: '4',
  inputCSS: '',
  inputName: '',
  inputOnChange: undefined,
  inputValue: '',
  labelCSS: {},
  labelText: '',
  required: false,
  type: 'checkbox',
};

InputCheckBox.propTypes = {
  checkOn: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  columns: PropTypes.string,
  inputCSS: PropTypes.string,
  inputName: PropTypes.string,
  inputOnChange: PropTypes.func,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  labelCSS: PropTypes.objectOf(PropTypes.any),
  labelText: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

export default InputCheckBox;
