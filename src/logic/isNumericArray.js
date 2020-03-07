export const isNumericArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (isNaN(parseFloat(array[i])) && !isFinite(array[i])) {
      return false;
    }
  }

  return true;
};
