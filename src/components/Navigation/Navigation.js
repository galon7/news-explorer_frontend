import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import burger from '../../images/hamburger.svg';
import burgerBlack from '../../images/hamburger_black.svg';
import logout from '../../images/logout.svg';
import logoutBlack from '../../images/logout_black.svg';

function Navigation({ onLoginClick, onBurgerClick, isPopupNavigationOpen, isLoggedIn }) {
  const { pathname } = useLocation();
  const userName = 'Alon';

  return (
    <ul className="navigation">
      <li>
        <Link
          to="/"
          className={`navigation__item ${pathname === '/' && 'navigation__item-selected'}  
              ${pathname === '/saved-news' && 'navigation__item_saved-news'}
            `}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/saved-news"
          className={`navigation__item 
              ${
                pathname === '/saved-news' &&
                'navigation__item_saved-news navigation__item-selected_saved-news'
              }
            `}
        >
          Saved articles
        </Link>
      </li>
      <li>
        <button
          type="button"
          className={`navigation__button navigation__item ${
            pathname === '/saved-news' && 'navigation__item_saved-news'
          } ${!isLoggedIn && 'navigation__button_signin'}`}
          onClick={onLoginClick}
        >
          {isLoggedIn ? (
            <>
              <p className="navigation__button-text">{userName}</p>
              <img src={pathname === '/' ? logout : logoutBlack} alt="logout" />
            </>
          ) : (
            'Sign in'
          )}
        </button>
      </li>
      {!isPopupNavigationOpen && (
        <button className="navigation__burger" onClick={onBurgerClick}>
          <img src={pathname === '/' ? burger : burgerBlack} alt="menu" />
        </button>
      )}
    </ul>
  );
}

export default Navigation;
