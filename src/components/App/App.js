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

import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRegisteredOpen, setIsRegisteredOpen] = useState(false);
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    <div className="page">
      <div className="page__container">
        <Header
          onLoginClick={handleLoginClick}
          onBurgerClick={handleBurgerClick}
          isPopupNavigationOpen={isPopupNavigationOpen}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
        <NewsCardList />
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
    </div>
  );
}

export default App;