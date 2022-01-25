import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-form__input" placeholder="Enter topic" />
      <button className="search-form__button">Search</button>
    </form>
  );
}

export default SearchForm;
