// Upload image overlay logic module
import {form} from './main.js';
import {addHideHandler} from './util.js';
import {initImageScale, resetImageScale} from './img-scale.js';
import {initImageEffects, resetImageEffects} from './img-effects.js';

const overlay = document.querySelector('.img-upload__overlay');
const hideOverlayButton = document.querySelector('#upload-cancel');
const submitButton = document.querySelector('.img-upload__submit');

export const hideImageOverlay = function () {
  form.reset();
  resetImageScale();
  resetImageEffects();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

export const showImageOverlay = function () {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  addHideHandler(hideOverlayButton, hideImageOverlay);
  initImageScale();
  initImageEffects();
};

export const unblockSubmitButton = function () {
  submitButton.disabled = false;
};

export const blockSubmitButton = function () {
  submitButton.disabled = true;
};

const hideSuccessMessage = function () {
  const message = document.querySelector('.success');
  document.body.removeChild(message);
};

export const showSuccessMessage = function () {
  const message = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(message);
  addHideHandler(document.querySelector('.success__button'), hideSuccessMessage);
};

const hideErrorMessage = function () {
  const message = document.querySelector('.error');
  document.body.removeChild(message);
};

export const showErrorMessage = function () {
  const message = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(message);
  addHideHandler(document.querySelector('.error__button'), hideErrorMessage);
};
