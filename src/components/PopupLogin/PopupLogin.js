import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupLogin({ isOpen, onClose, openOtherPopup }) {
  return (
    <PopupWithForm
      name="change-avatar"
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign in"
      openOtherPopup={openOtherPopup}
      linkText="Sign up"
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
    </PopupWithForm>
  );
}

export default PopupLogin;
