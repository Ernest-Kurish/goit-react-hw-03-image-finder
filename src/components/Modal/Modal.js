import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  render() {
    const { imageUrl, onClose } = this.props;
    return (
      <div className={css.Overlay} onClick={onClose}>
        <div className={css.Modal}>
          <img src={imageUrl} alt={imageUrl} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
