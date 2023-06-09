import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, onShow, tags } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={webformatURL}
          alt={tags}
          onClick={() => onShow(largeImageURL)}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onShow: PropTypes.func,
};

export default ImageGalleryItem;
