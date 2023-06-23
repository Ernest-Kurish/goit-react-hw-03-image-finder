import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick, name, type }) => (
  <button className={css.Button} type={type} onClick={onClick}>
    {name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
