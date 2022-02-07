import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import './Header_saved-news.css';

function Header({
  onLoginClick,
  onBurgerClick,
  isPopupNavigationOpen,
  isLoggedIn,
  setIsLoggedIn,
  setJwt,
}) {
  const { pathname } = useLocation();
  return (
    <header className={`header ${pathname === '/saved-news' && 'header_saved-news'}`}>
      <h2 className={`header__title ${pathname === '/saved-news' && 'header__title_saved-news'}`}>
        NewsExplorer
      </h2>
      <Navigation
        onLoginClick={onLoginClick}
        onBurgerClick={onBurgerClick}
        isPopupNavigationOpen={isPopupNavigationOpen}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setJwt={setJwt}
      />
    </header>
  );
}

export default Header;
