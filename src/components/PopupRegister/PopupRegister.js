import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupRegister({ isOpen, onClose, openOtherPopup }) {
  return (
    <PopupWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign up"
      openOtherPopup={openOtherPopup}
      linkText="Sign in"
    >
      <p className="popupWithForm__field-title">Email</p>
      <input
        type="email"
        className="popupWithForm__input"
        id="email-input"
        placeholder="Enter email"
        required
      />
      <span id="email-input-error" className="popupWithForm__error-text"></span>
      <p className="popupWithForm__field-title">Password</p>
      <input
        type="password"
        className="popupWithForm__input"
        id="password-input"
        placeholder="Enter password"
        required
      />
      <span id="password-input-error" className="popupWithForm__error-text"></span>
      <p className="popupWithForm__field-title">Username</p>
      <input
        type="text"
        className="popupWithForm__input"
        id="username-input"
        placeholder="Enter your username"
        required
      />
      <span id="username-input-error" className="popupWithForm__error-text"></span>
    </PopupWithForm>
  );
}

export default PopupRegister;
