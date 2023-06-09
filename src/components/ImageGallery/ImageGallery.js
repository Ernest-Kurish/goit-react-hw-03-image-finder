import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { images, onShow } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {images.map(({ webformatURL, largeImageURL, id }) => (
          <ImageGalleryItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onShow={onShow}
            key={id}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onShow: PropTypes.func,
};

export default ImageGallery;
