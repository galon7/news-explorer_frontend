import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNews from '../SavedNews/SavedNews';
import About from '../About/About';
import Footer from '../Footer/Footer';
import PopupLogin from '../PopupLogin/PopupLogin';
import PopupRegister from '../PopupRegister/PopupRegister';
import PopupRegistered from '../PopupRegistered/PopupRegistered';
import PopupNavigation from '../PopupNavigation/PopupNavigation';
import { getNewsFromApi } from '../../utils/NewsApi';
import { dateRange } from '../../utils/FormatDate';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRegisteredOpen, setIsRegisteredOpen] = useState(false);
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [showPreloaderNF, setShowPreloaderNF] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [cards, setCards] = useState([]);

  const apiKey = 'ea8487c7085543179f251912d0737476';
  const from = dateRange().currentDate;
  const to = dateRange().weekAgoDate;
  const pageSize = 100;

  function getSearchResults(input) {
    setShowSearchResults(false);
    setShowPreloader(true);
    getNewsFromApi(input, apiKey, from, to, pageSize)
      .then((data) => {
        console.log(data.articles);
        if (data.articles.length !== 0) setCards(data.articles);
        else return 'no articles';
      })
      .then((check) => {
        setShowPreloader(false);
        if (check) setShowPreloaderNF(true);
        else setShowSearchResults(true);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleLoginClick() {
    setIsLoginOpen(true);
    setIsLoggedIn(true);
  }

  function handleRegisterClick() {
    setIsRegisterOpen(true);
  }

  function handleBurgerClick() {
    setIsPopupNavigationOpen(true);
  }

  function closeAllPopups() {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
    setIsRegisteredOpen(false);
    setIsPopupNavigationOpen(false);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, []);

  return (
    <div className="app">
      <Header
        onLoginClick={handleLoginClick}
        onBurgerClick={handleBurgerClick}
        isPopupNavigationOpen={isPopupNavigationOpen}
        isLoggedIn={isLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              getSearchResults={getSearchResults}
              showPreloader={showPreloader}
              showPreloaderNF={showPreloaderNF}
            />
          }
        />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      {showSearchResults && <NewsCardList searchResults={cards} />}
      <About />
      <Footer />

      <PopupLogin
        isOpen={isLoginOpen}
        onClose={closeAllPopups}
        openOtherPopup={handleRegisterClick}
      />
      <PopupRegister
        isOpen={isRegisterOpen}
        onClose={closeAllPopups}
        openOtherPopup={handleLoginClick}
      />
      <PopupRegistered
        isOpen={isRegisteredOpen}
        onClose={closeAllPopups}
        openOtherPopup={handleLoginClick}
      />
      <PopupNavigation
        isOpen={isPopupNavigationOpen}
        onClose={closeAllPopups}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
