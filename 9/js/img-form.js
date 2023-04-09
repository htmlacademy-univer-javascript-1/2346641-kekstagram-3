// Upload image form validation, handlers etc module
import '../pristine/pristine.min.js';
import {isDescriptionValid} from './util.js';
import {showImageOverlay, hideImageOverlay, showSuccessMessage, showErrorMessage, blockSubmitButton, unblockSubmitButton} from './img-overlay.js';
import {form} from './main.js';
import { postData } from './api.js';

export const imageFormValidate = function () {
  form.querySelector('#upload-file').addEventListener('change', () => {
    showImageOverlay();
  });
  const pristine = new Pristine(form, {
    classTo: 'img-upload__text',
    successClass: 'form--valid',
    errorClass: 'form--invalid',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'form__error',
    errorTextTag: 'span'
  });

  pristine.addValidator(
    form.querySelector('.text__description'),
    isDescriptionValid,
    'Длина должна быть 20-140 символов');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();

      postData(new FormData(evt.target), showSuccessMessage, showErrorMessage);

      unblockSubmitButton();
      hideImageOverlay();
    }
  });
};
