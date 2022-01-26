import React from 'react';
import './PreloaderNotFound.css';

function PreloaderNotFound() {
  return (
    <section className="preloaderNotFound">
      <div className="preloaderNotFound__circle"></div>
      <p className="preloaderNotFound__text">Nothing found</p>
      <p className="preloaderNotFound__text-bottom">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default PreloaderNotFound;
