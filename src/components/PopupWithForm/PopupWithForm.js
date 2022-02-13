import React from 'react';
import './PopupWithForm.css';
import './PopupWithForm_open.css';
import './PopupWithForm__registered-link.css';
import './PopupWithForm__container-registered.css';
function PopupWithForm({
  isOpen,
  onClose,
  title,
  openOtherPopup,
  children,
  name,
  onSubmit,
  buttonText,
  buttonActive,
  linkText,
  serverErrorMessage,
}) {
  function handleLinkClick() {
    onClose();
    openOtherPopup();
  }

  return (
    <div className={`popupWithForm ${isOpen && 'popupWithForm_open'}`}>
      <div
        className={buttonText ? 'popupWithForm__container' : 'popupWithForm__container-registered'}
      >
        <button type="button" className="popupWithForm__close" onClick={onClose} />
        <h2 className="popupWithForm__title">{title}</h2>
        <form onSubmit={onSubmit} className="popupWithForm__form" name={`${name}-form`}>
          {children}
          <p className="popupWithForm__error-text popupWithForm__server-error-text">
            {serverErrorMessage}
          </p>
          {buttonText && (
            <button
              type="submit"
              className={`popupWithForm__submit-button ${
                buttonActive && 'popupWithForm__submit-button_active'
              }`}
            >
              {buttonText}
            </button>
          )}
        </form>

        {buttonText ? (
          <p className="popupWithForm__option">
            or{' '}
            <span className="popupWithForm__link" onClick={handleLinkClick}>
              {linkText}
            </span>
          </p>
        ) : (
          <span className="popupWithForm__registered-link" onClick={handleLinkClick}>
            {linkText}
          </span>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;
