import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ getSearchResults }) {
  const [inputValue, setInputValue] = useState('');
  const [placeHolder, setPlaceHolder] = useState('Enter topic');

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function resetPlaceHolder() {
    setPlaceHolder('Enter topic');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue) setPlaceHolder('Please enter a keyword');
    else {
      getSearchResults(inputValue);
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className={`searchForm__input ${
          placeHolder === 'Please enter a keyword' && 'searchForm__input-empty'
        }`}
        placeholder={placeHolder}
        onChange={handleInputChange}
        value={inputValue}
        onFocus={resetPlaceHolder}
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
