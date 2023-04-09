// Image scale control module
import {form} from './main.js';

const image = document.querySelector('.img-upload__preview > img');
const scaleControlContainer = document.querySelector('.scale__control--value');

const setScaleValue = function (nval) {
  scaleControlContainer.value = `${nval}%`;
  image.style.transform = `scale(${nval / 100})`;
};

export const resetImageScale = function () {
  setScaleValue(100);
};

const buttonSmallerListener = function() {
  const nval = Math.max(0, parseFloat(scaleControlContainer.value) - 25);
  setScaleValue(nval);
};

const buttonBiggerListener = function() {
  const nval = Math.min(100, parseFloat(scaleControlContainer.value) + 25);
  setScaleValue(nval);
};

export const initImageScale = function () {
  const buttonScaleSmaller = form.querySelector('.scale__control--smaller');
  const buttonScaleBigger = form.querySelector('.scale__control--bigger');

  scaleControlContainer.value = '100%';
  buttonScaleSmaller.addEventListener('click', buttonSmallerListener);
  buttonScaleBigger.addEventListener('click', buttonBiggerListener);
};
