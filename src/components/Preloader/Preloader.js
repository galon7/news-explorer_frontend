import React from 'react';
import './Preloader.css';

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__circle"></div>
      {/* <div className="preloader__circle_not-found"></div> */}
      <p className="preloader__text">Searching for news...</p>
      {/* <p className="preloader__not-found-text">Nothing found</p>
      <p className="preloader__text">Sorry, but nothing matched your search terms.</p> */}
    </section>
  );
}

export default Preloader;
