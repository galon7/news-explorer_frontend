import React from 'react';
import './PreloaderServerError.css';

function PreloaderServerError() {
  return (
    <section className="preloaderNotFound">
      <div className="preloaderNotFound__circle"></div>
      <p className="preloaderNotFound__text">Sorry, something went wrong during the request.</p>
      <p className="preloaderNotFound__text">
        There may be a connection issue or the server may be down.
      </p>
      <p className="preloaderNotFound__text-bottom" style={{ color: 'blue' }}>
        Please try again later.
      </p>
    </section>
  );
}

export default PreloaderServerError;
