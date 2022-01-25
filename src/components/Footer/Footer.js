import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import github from '../../images/github.svg';
import facebook from '../../images/facebook.svg';

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__copyright">&copy; 2021 Supersite, Powered by News API</small>
      <div className="footer__links">
        <ul className="footer__left">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <Link to="www.practicum.com" className="footer__link">
            Practicum by Yandex
          </Link>
        </ul>
        <ul className="footer__right">
          <a
            href="https://github.com/galon7"
            className="footer__social"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.facebook.com"
            className="footer__social"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
