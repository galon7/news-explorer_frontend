import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PopupNavigation.css';
import './PopupNavigation_open.css';
import '../Navigation/Navigation.css';
import close from '../../images/close-menu.svg';

function PopupNavigation({ isOpen, onClose, onLoginClick }) {
  const { pathname } = useLocation();
  return (
    <ul className={`popupNavigation ${isOpen && 'popupNavigation_open'}`}>
      <button className="popupNavigation__close" onClick={onClose}>
        <img src={close} alt="close" />
      </button>
      <li>
        {pathname === '/' ? (
          <Link to="/saved-news" className="popupNavigation__item">
            Saved articles
          </Link>
        ) : (
          <Link to="/" className="popupNavigation__item">
            Home
          </Link>
        )}
      </li>
      <li>
        <button type="button" className="popupNavigation__button" onClick={onLoginClick}>
          Sign in
        </button>
      </li>
    </ul>
  );
}

export default PopupNavigation;
