import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
import { getNewsFromApi, apiKey, from, to, pageSize } from '../../utils/NewsApi';
import ProtectedRoute from '../ProtectedRoute';
import {
  register,
  login,
  checkToken,
  getArticles,
  changeSavedCardStatus,
} from '../../utils/MainApi';
import './App.css';

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState({});
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRegisteredOpen, setIsRegisteredOpen] = useState(false);
  const [isPopupNavigationOpen, setIsPopupNavigationOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const [showPreloaderNF, setShowPreloaderNF] = useState(false);
  const [showPreloaderServerNF, setShowPreloaderServerNF] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem('searchedCards')));
  const [bookmarkedCardId, setIsBookmarkedCardId] = useState('');
  const [savedArticles, setSavedArticles] = useState([]);
  const [serverErrorMessage, setServerErrorMessage] = useState('');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const requestHeader = { Authorization: `Bearer ${jwt}`, 'Content-Type': 'application/json' };

  useEffect(() => {
    if (jwt) {
      checkToken(jwt)
        .then((data) => {
          if (data) {
            setCurrentUser(data);
            setIsLoggedIn(true);
          }
        })
        .catch((err) => console.log(`Error.....: ${err}`));
    }
  }, [jwt]);

  useEffect(() => {
    if (isLoggedIn && savedArticles.length === 0) {
      getArticles(requestHeader)
        .then((data) => {
          setSavedArticles(data);
        })
        .catch((err) => console.log(`Error.....: ${err}`));
    }
  });

  useEffect(() => {
    if (cards && isLoggedIn) setShowSearchResults(true);
  }, [isLoggedIn, cards]);

  function getSearchResults(input) {
    setShowSearchResults(false);
    setShowPreloader(true);
    getNewsFromApi(input, apiKey, from, to, pageSize)
      .then((data) => {
        data.articles.map((card) => (card.keyword = input));
        return data;
      })
      .then((data) => {
        if (data.articles.length !== 0) {
          setCards(data.articles);
          localStorage.setItem('searchedCards', JSON.stringify(data.articles));
        } else return 'no articles';
      })
      .then((checkArticles) => {
        setShowPreloader(false);
        if (checkArticles) {
          localStorage.removeItem('searchedCards');
          setShowPreloaderNF(true);
        } else setShowSearchResults(true);
      })
      .catch(() => setShowPreloaderServerNF(true));
  }

  function handleLoginClick() {
    setIsLoginOpen(true);
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

  function handleRegister(user) {
    setServerErrorMessage('');
    register(user.username, user.email, user.password)
      .then(() => {
        setIsRegisteredOpen(true);
        setIsRegisterOpen(false);
      })
      .catch((err) => {
        setServerErrorMessage(err.toString());
      });
  }

  function handleSignIn(user) {
    setServerErrorMessage('');
    login(user.password, user.email)
      .then((data) => {
        setJwt(data.token);
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch((err) =>
        err === 'Error: 401'
          ? setServerErrorMessage("User doesn't exist")
          : setServerErrorMessage(err.toString())
      );
  }

  function handleSaveBookmark(newsCard) {
    changeSavedCardStatus(newsCard, false, requestHeader)
      .then((data) => {
        setIsBookmarkedCardId(data._id);
      })
      .catch((err) => console.log(`Error.....: ${err}`));
  }

  function handleDeleteBookmark(bookmarkedCardId) {
    changeSavedCardStatus(bookmarkedCardId, true, requestHeader).catch((err) =>
      console.log(`Error.....: ${err}`)
    );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          onLoginClick={handleLoginClick}
          onBurgerClick={handleBurgerClick}
          isPopupNavigationOpen={isPopupNavigationOpen}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setJwt={setJwt}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                getSearchResults={getSearchResults}
                showPreloader={showPreloader}
                showPreloaderNF={showPreloaderNF}
                showPreloaderServerNF={showPreloaderServerNF}
              />
            }
          />
          <Route
            path="/saved-news"
            element={
              <ProtectedRoute setIsLoginOpen={setIsLoginOpen}>
                <SavedNews
                  articles={savedArticles}
                  isLoggedIn={isLoggedIn}
                  handleSaveBookmark={handleSaveBookmark}
                  handleDeleteBookmark={handleDeleteBookmark}
                  bookmarkedCardId={bookmarkedCardId}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        {showSearchResults && pathname === '/' && (
          <NewsCardList
            searchResults={cards}
            isLoggedIn={isLoggedIn}
            handleSaveBookmark={handleSaveBookmark}
            handleDeleteBookmark={handleDeleteBookmark}
            bookmarkedCardId={bookmarkedCardId}
          />
        )}
        <About />
        <Footer />

        <PopupLogin
          isOpen={isLoginOpen}
          onClose={closeAllPopups}
          openOtherPopup={handleRegisterClick}
          handleSignIn={handleSignIn}
          serverErrorMessage={serverErrorMessage}
        />
        <PopupRegister
          isOpen={isRegisterOpen}
          onClose={closeAllPopups}
          openOtherPopup={handleLoginClick}
          handleRegister={handleRegister}
          serverErrorMessage={serverErrorMessage}
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
    </CurrentUserContext.Provider>
  );
}

export default App;
