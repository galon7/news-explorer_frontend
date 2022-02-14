import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';
import burger from '../../images/hamburger.svg';
import burgerBlack from '../../images/hamburger_black.svg';
import logout from '../../images/logout.svg';
import logoutBlack from '../../images/logout_black.svg';

function Navigation({
  onLoginClick,
  onBurgerClick,
  isPopupNavigationOpen,
  isLoggedIn,
  setIsLoggedIn,
  setJwt,
}) {
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
  const navigate = useNavigate();

  function handleNavigationButtonClick() {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      setJwt(null);
      navigate('/');
    } else {
      onLoginClick();
    }
  }

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
        {isLoggedIn && (
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
        )}
      </li>
      <li>
        <button
          type="button"
          className={`navigation__button navigation__item ${
            pathname === '/saved-news' && 'navigation__item_saved-news'
          } ${!isLoggedIn && 'navigation__button_signin'}`}
          onClick={handleNavigationButtonClick}
        >
          {isLoggedIn ? (
            <>
              <p className="navigation__button-text">{currentUser.name}</p>
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
