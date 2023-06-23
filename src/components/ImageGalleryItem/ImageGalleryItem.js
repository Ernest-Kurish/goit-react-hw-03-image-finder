import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onShow, tags }) => (
  <li className={css.ImageGalleryItem}>
    <img
      className={css['ImageGalleryItem-image']}
      src={webformatURL}
      alt={tags}
      onClick={() => onShow(largeImageURL)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onShow: PropTypes.func,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
