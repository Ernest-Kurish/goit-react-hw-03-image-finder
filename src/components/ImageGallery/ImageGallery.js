import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onShow }) => (
  <ul className={css.ImageGallery}>
    {images.map(({ webformatURL, largeImageURL, id }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onShow={onShow}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array,
  onShow: PropTypes.func,
};

export default ImageGallery;
