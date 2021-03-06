import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import PreloaderNotFound from '../PreloaderNotFound/PreloaderNotFound';
import PreloaderServerError from '../PreloaderServerError/PreloaderServerError';
import './Main.css';

function Main({
  getSearchResults,
  showPreloader,
  showPreloaderNF,
  showPreloaderServerNF,
  setKeyword,
}) {
  return (
    <>
      <main className="main">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__text">
          Find the latest news on any topic and save them in your personal account.
        </p>
        <SearchForm getSearchResults={getSearchResults} setKeyword={setKeyword} />
      </main>
      {showPreloader && <Preloader />}
      {showPreloaderNF && <PreloaderNotFound />}
      {showPreloaderServerNF && <PreloaderServerError />}
    </>
  );
}

export default Main;
