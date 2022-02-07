import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../utils/FormValidations';

function PopupRegister({ isOpen, onClose, openOtherPopup, handleRegister, serverErrorMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    handleRegister(values);
  }

  return (
    <PopupWithForm
      name="register"
      title="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign up"
      buttonActive={isValid}
      openOtherPopup={openOtherPopup}
      linkText="Sign in"
      onSubmit={handleRegisterSubmit}
      serverErrorMessage={serverErrorMessage}
    >
      <p className="popupWithForm__field-title">Email</p>
      <input
        type="email"
        name="email"
        className="popupWithForm__input"
        id="email-input"
        placeholder="Enter email"
        minLength={3}
        required
        onChange={handleChange}
        value={values.email}
      />
      <span id="email-input-error" className="popupWithForm__error-text">
        {errors.email}
      </span>
      <p className="popupWithForm__field-title">Password</p>
      <input
        type="password"
        name="password"
        className="popupWithForm__input"
        id="password-input"
        placeholder="Enter password"
        minLength={4}
        required
        onChange={handleChange}
        value={values.password}
      />
      <span id="password-input-error" className="popupWithForm__error-text">
        {errors.password}
      </span>
      <p className="popupWithForm__field-title">Username</p>
      <input
        type="text"
        name="username"
        className="popupWithForm__input"
        id="username-input"
        placeholder="Enter your username"
        required
        onChange={handleChange}
        value={values.username}
      />
      <span id="username-input-error" className="popupWithForm__error-text">
        {errors.username}
      </span>
    </PopupWithForm>
  );
}

export default PopupRegister;
