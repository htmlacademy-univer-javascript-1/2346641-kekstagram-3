// Add effects on image when uploading module

const image = document.querySelector('.img-upload__preview > img');
const effectsContainer = document.querySelector('.effects__list');

const effectRadioListener = function (btn) {
  image.classList.remove(...image.classList);
  if (btn.target.value !== 'none') {
    image.classList.add(`effects_preview--${btn.target.value}`);
  }
};

export const resetImageEffects = function () {
  image.classList.remove(...image.classList);
  image.classList.add('effects__preview--none');
};

export const initImageEffects = function () {
  image.classList.add('effects__preview--none');
  effectsContainer.addEventListener('change', effectRadioListener);
};
