export const fromMatrixToString = matrixArray => {
  let str = "";

  matrixArray.forEach(item => {
    item.forEach(element => (str += element.join("") + "\n"));
  });

  return str;
};
