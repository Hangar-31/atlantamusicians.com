
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
  onClick,
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
      onClick={onClick}
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
        value={inputValue}
        css={inputCSS}
        checked={checkOn}
      />
      <CheckBoxCheckStyled />
      {(required ? '*' : '') + labelText}
    </LabelStyled>
  );
};

InputCheckBox.defaultProps = {
  checkOn: false,
  columns: '4',
  inputCSS: '',
  inputName: '',
  onClick: undefined,
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
  onClick: PropTypes.func,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  labelCSS: PropTypes.objectOf(PropTypes.any),
  labelText: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

export default InputCheckBox;
