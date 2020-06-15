import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ className }) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="7" cy="7" r="6.5" fill="#fff" stroke="#7d7d7d" />
      <line
        x1="13.3536"
        y1="12.6464"
        x2="18.3536"
        y2="17.6464"
        stroke="#7d7d7d"
      />
    </svg>
  );
}

Search.propTypes = {
  className: PropTypes.string,
};

Search.defaultProps = {
  className: '',
};
