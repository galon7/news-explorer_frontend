import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="savedNewsHeader">
      <h1 className="savedNewsHeader__title">Saved articles</h1>
      <h2 className="savedNewsHeader__subtitle">Elise, you have 5 saved articles</h2>
      <p className="savedNewsHeader__keywords">
        By keywords:{' '}
        <span className="savedNewsHeader__keyword">Nature, Yellowstone, and 2 other</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
