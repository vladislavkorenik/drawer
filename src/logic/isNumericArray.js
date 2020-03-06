export const isNumericArray = Array => {
  Array.forEach(element => {
    if (isNaN(parseFloat(element)) && !isFinite(element)) {
      return false;
    }
  });
  return true;
};
