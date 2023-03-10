const randInt = function(left, right) {
  if (right < left || left < 0) {
    throw new Error(`Invalid parameters given: ${  left  }, ${  right}`);
  }
  if (right === left) {
    return left;
  }

  return Math.floor(left + (right - left + 1) * Math.random());
};

const lengthFits = function(str, len) {
  return (str.length <= len);
};
