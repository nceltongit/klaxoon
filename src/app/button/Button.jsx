import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ type, children, onClick, className }) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Button.defaultProps = {
  type: '',
  children: '',
  onClick: () => {},
  className: ''
};

Button.displayName = 'Button';
