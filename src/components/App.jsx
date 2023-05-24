import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const API_KEY = '35271544-92f681d037cad76a4cc4782d9';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    largeImageURL: '',
    showModal: false,
  };

  onSubmit = async query => {
    if (query !== this.state.query) {
      this.setState({
        images: [],
        page: 1,
      });
    }
    this.setState({
      isLoading: true,
      query,
    });
    try {
      const response = await fetch(
        `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      const data = await response.json();
      if (data.hits.length > 0) {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));
      } else {
        console.log('No images found');
        this.setState({ images: [] });
      }
    } catch (error) {
      console.log('There was an error', error);
    }
    this.setState({ isLoading: false });
  };

  loadMore = event => {
    event.preventDefault();
    this.onSubmit(this.state.query);
  };

  onShow = url => {
    this.setState({
      showModal: true,
      largeImageURL: url,
    });
  };

  onClose = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
    });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onShow={this.onShow} />

        {images.length > 0 && <Button onClick={this.loadMore} name={'Load more'} />}
        {showModal && <Modal onClose={this.onClose} imageUrl={largeImageURL} />}
      </div>
    );
  }
}
