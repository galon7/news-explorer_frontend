import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
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
    if (!inputValue) setPlaceHolder('Please enter topic');
  }

  return (
    <form className="search-form">
      <input
        className={`searchForm__input ${
          placeHolder === 'Please enter topic' && 'searchForm__input-empty'
        }`}
        placeholder={placeHolder}
        onChange={handleInputChange}
        value={inputValue}
        onFocus={resetPlaceHolder}
      />
      <button type="submit" className="search-form__button" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
