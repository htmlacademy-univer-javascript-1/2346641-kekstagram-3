// Entry point

import {drawPictures} from './draw.js';
import {imageFormValidate} from './img-form.js';
import {getData} from './api.js';

export const form = document.querySelector('#upload-select-image');

// drawPictures(createPicturesArray(25));
imageFormValidate();
getData(drawPictures);
