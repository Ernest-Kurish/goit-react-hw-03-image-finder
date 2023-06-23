import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '35271544-92f681d037cad76a4cc4782d9';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      query: '',
      page: 1,
      isLoading: false,
      largeImageURL: '',
      showModal: false,
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

 fetchImages = async () => {
  const { query, page } = this.state;
  this.setState({ isLoading: true });

  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();

    if (data.hits.length > 0) {
      this.setState((prevState) => ({
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

  handleSubmit = (value) => {
    if (value !== this.state.query) {
      this.setState({ images: [], page: 1 });
    }
    this.setState({ query: value });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleShowModal = (url) => {
    this.setState({ showModal: true, largeImageURL: url });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onShow={this.handleShowModal} />

        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore} name={'Load more'} />
        )}
        {showModal && (
          <Modal onClose={this.handleCloseModal} imageUrl={largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
