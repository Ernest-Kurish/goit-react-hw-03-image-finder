import React, { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
      value: '',
    };
  

  onHandleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onHandleSubmit}>
          <button className={css['SearchForm-button']} type="submit">
            <span className={css['button-label']}>Search</span>
          </button>
          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={this.onHandleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
