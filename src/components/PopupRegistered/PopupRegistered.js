import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupRegistered({ isOpen, onClose, openOtherPopup }) {
  return (
    <PopupWithForm
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
      openOtherPopup={openOtherPopup}
      linkText="Sign in"
    ></PopupWithForm>
  );
}

export default PopupRegistered;
