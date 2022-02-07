import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../utils/FormValidations';

function PopupLogin({ isOpen, onClose, openOtherPopup, handleSignIn, serverErrorMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSignInSubmit(e) {
    e.preventDefault();
    handleSignIn(values);
    onClose();
  }

  return (
    <PopupWithForm
      name="login"
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Sign in"
      buttonActive={isValid}
      openOtherPopup={openOtherPopup}
      linkText="Sign up"
      onSubmit={handleSignInSubmit}
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
    </PopupWithForm>
  );
}

export default PopupLogin;
