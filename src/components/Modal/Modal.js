import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => (
  <div className={css.Overlay} onClick={onClose}>
    <div className={css.Modal}>
      <img src={imageUrl} alt={imageUrl} />
    </div>
  </div>
);

Modal.propTypes = {
  imageUrl: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
