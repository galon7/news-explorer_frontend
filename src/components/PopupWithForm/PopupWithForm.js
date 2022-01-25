import React from 'react';
import './PopupWithForm.css';
import './PopupWithForm_open.css';
import './PopupWithForm__registered-link.css';
import './PopupWithForm__container_registered.css';
function PopupWithForm({
  isOpen,
  onClose,
  title,
  openOtherPopup,
  children,
  name,
  onSubmit,
  buttonText,
  linkText,
}) {
  function handleLinkClick() {
    onClose();
    openOtherPopup();
  }

  return (
    <div className={`popupWithForm ${isOpen && 'popupWithForm_open'}`}>
      <div
        className={buttonText ? 'popupWithForm__container' : 'popupWithForm__container_registered'}
      >
        <button type="button" className="popupWithForm__close" onClick={onClose} />
        <h2 className="popupWithForm__title">{title}</h2>
        <form action="#" onSubmit={onSubmit} className="popupWithForm__form" name={`${name}-form`}>
          {children}
          {buttonText && (
            <button type="submit" className="popupWithForm__submit-button">
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
