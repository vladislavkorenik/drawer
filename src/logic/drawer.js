import { isNumericArray } from "./isNumericArray";
import { copyMatrix } from "./copyMatrix";

export const drawing = commands => {
  let canvasMatrixArray = [];


  if (!commands[0].hasOwnProperty("C") || !isValidCommand("C", commands[0].C)) {
    return { text: "Can't draw without canvas", href: null };
  }

  commands.forEach(obj => {
    for (let key in obj) {
      switch (key) {
        case "C":
          canvasMatrixArray.push(createCanvas(...obj.C));
          break;
        case "L":
          canvasMatrixArray = isValidCommand("L", obj.L)
            ? checkError(
                canvasMatrixArray,
                createLine(
                  canvasMatrixArray[canvasMatrixArray.length - 1],
                  ...obj.L
                )
              )
            : canvasMatrixArray;
          break;
        case "R":
          canvasMatrixArray = isValidCommand("R", obj.R)
            ? checkError(
                canvasMatrixArray,
                createRectangle(
                  canvasMatrixArray[canvasMatrixArray.length - 1],
                  ...obj.R
                )
              )
            : canvasMatrixArray;
          break;
        case "B":
          break;
        default:
          break;
      }
    }
  });

  const outputCanvas = fromMatrixToString(canvasMatrixArray);
  return {
    text: outputCanvas,
    href: `data:text/plain;content-disposition=attachment;filename=file,${outputCanvas}`
  };
};

const createRectangle = (canvas, x1, y1, x2, y2) => {
  console.log('lol')
  let canvasWithRectangle = [];

  canvasWithRectangle = createHorizontalLine(canvas, x1, x2, y1);
  canvasWithRectangle = createHorizontalLine(canvasWithRectangle, x1, x2, y2);
  canvasWithRectangle = createVerticalLine(canvasWithRectangle, y1, y2, x1);
  canvasWithRectangle = createVerticalLine(canvasWithRectangle, y1, y2, x2);

  return canvasWithRectangle;
};

const createLine = (canvas, x1, y1, x2, y2) => {
  let canvasWithLine = [];
  const isVertical = x1 === x2;
  const isHorizontal = y1 === y2;

  if (isVertical) {
    canvasWithLine = createVerticalLine(canvas, y1, y2, x1);
  } else if (isHorizontal) {
    canvasWithLine = createHorizontalLine(canvas, x1, x2, y1);
  }

  return isVertical || isHorizontal ? canvasWithLine : false;
};

const createVerticalLine = (canvas, y1, y2, x) => {
  const canvasWithVerticalLine = copyMatrix(canvas);
  const symbol = "x";
  for (let i = 1; i < canvasWithVerticalLine.length - 1; i++) {
    if (i >= y1 && i <= y2) {
      canvasWithVerticalLine[i][x] = symbol;
    }
  }

  return canvasWithVerticalLine;
};

const createHorizontalLine = (canvas, x1, x2, y) => {
  const canvasWithHorizontalLine = copyMatrix(canvas);
  const symbol = "x";
  for (let i = 1; i < canvasWithHorizontalLine[0].length - 1; i++) {
    if (i >= x1 && i <= x2) {
      canvasWithHorizontalLine[y][i] = symbol;
    }
  }

  return canvasWithHorizontalLine;
};

const createCanvas = (width, height) => {
  let canvas = Array(height + 2)
    .fill(" ")
    .map(() => Array(width + 2).fill(" "));

  canvas[0] = canvas[canvas.length - 1].fill("-");

  for (let i = 1; i < canvas.length - 1; i++) {
    canvas[i][0] = canvas[i][width + 1] = "|";
  }

  return canvas;
};

const isValidCommand = (commandName, commandParams) => {
  switch (commandName) {
    case "C":
      return commandParams.length === 2 && isNumericArray(commandParams);
    case "L":
      return commandParams.length === 4 && isNumericArray(commandParams);
    case "R":
      return commandParams.length === 4 && isNumericArray(commandParams);
    case "B":
      return (
        commandParams.length === 3 &&
        isNumericArray([commandParams[0], commandParams[1]]) &&
        typeof commandParams[2] === "string"
      );
    default:
      return false;
  }
};

const checkError = (array, createFunc) =>
  createFunc ? [...array, createFunc] : [...array];

const fromMatrixToString = matrixArray => {
  let str = "";

  matrixArray.forEach(item => {
    item.forEach(element => (str += element.join("") + "\n"));
  });

  return str;
};
