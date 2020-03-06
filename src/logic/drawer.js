export const drawing = commands => {
  let canvasMatrix = [];
  let answer = "Yor canvas";

  if (!commands[0].hasOwnProperty("C")) {
    return {
      text: "Cant draw without canvas",
      href: null
    };
  }

  console.log(commands);

  return {
    text: answer,
    href: `data:text/plain;content-disposition=attachment;filename=file,${answer}`
  };
};

const fromMatrixToString = matrix => {
  let str = "";

  matrix.forEach(item => {
    str += item.join("") + "\n";
  });

  return str;
};
