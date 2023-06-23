import React, { useState } from 'react';
import css from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const onHandleChange = (event) => {
    setValue(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onHandleSubmit}>
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
          onChange={onHandleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
