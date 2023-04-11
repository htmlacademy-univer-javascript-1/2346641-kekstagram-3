// Upload image form validation, handlers etc module
import '../pristine/pristine.min.js';
import {isDescriptionValid} from './util.js';
import {showImageOverlay, hideImageOverlay, showSuccessMessage, showErrorMessage, blockSubmitButton, unblockSubmitButton} from './overlays.js';
import {form} from './main.js';
import {image} from './img-effects.js';
import {postData} from './api.js';

export const validateForm = function () {
  form.querySelector('#upload-file').addEventListener('change', (evt) => {
    image.src = window.URL.createObjectURL(evt.target.files[0]);
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
