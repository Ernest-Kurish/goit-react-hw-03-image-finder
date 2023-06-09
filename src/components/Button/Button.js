import React, { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { onClick, name, type } = this.props;
    return (
      <button className={css.Button} type={type} onClick={onClick}>
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
