// Create and manage data functions
import { getRandomInteger } from './util.js';

const createPicturesArray = function (numberOfPictures) {
  const res = [];

  for (let i = 1; i <= numberOfPictures; i++) {
    res[i] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Very nice picture with id ${i}`,
      likes: getRandomInteger(15, 200),
      comments: getRandomInteger(0, 200),
    };
  }
  return res;
};

export {createPicturesArray};
