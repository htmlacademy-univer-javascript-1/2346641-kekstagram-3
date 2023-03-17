function randInt (left, right) {
  if (right < left || left < 0) {
    throw new Error(`Invalid parameters given: ${  left  }, ${  right}`);
  }
  if (right === left) {
    return left;
  }

  return Math.floor(left + (right - left + 1) * Math.random());
}

function doesLengthFit (str, len) {
  return (str.length <= len);
}

function createPhotosArray (numberOfPhotos) {
  const res = [];

  for (let i = 0; i < numberOfPhotos; i++) {
    res[i] = {
      id: i,
      url: `photos/${i}.jpg`,
      description: `Very nice photo with id ${i}`,
      likes: randInt(15, 200),
      comments: randInt(0, 200),
    };
  }
  return res;
}

const photos = createPhotosArray(25);
