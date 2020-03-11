import { copyMatrix } from "./copyMatrix";
import { checkError, isDotVisited, isValidCommand } from "./validation";
import { fromMatrixToString } from "./fromMatrixToString";
import { createOutputObject } from "./createOutputObject";

export const drawing = commands => {
  let canvasMatrixArray = [];
  const canvasParams = commands[0].C;
  const errorsArray = [];

  if (!commands[0].hasOwnProperty("C") || !isValidCommand("C", commands[0].C)) {
    errorsArray.push("Can't draw without canvas");

    return createOutputObject("No data", errorsArray);
  }

  commands.forEach(obj => {
    for (let key in obj) {
      switch (key) {
        case "C":
          canvasMatrixArray.push(createCanvas(...obj.C));
          break;
        case "L":
          const canvasWithLine = createLine(
            canvasMatrixArray[canvasMatrixArray.length - 1],
            ...obj.L
          );

          if (!canvasWithLine) {
            errorsArray.push(
              "Can’t draw a line, please check command and coordinates"
            );
            break;
          }
          if (isValidCommand("L", obj.L, canvasParams)) {
            canvasMatrixArray = checkError(canvasMatrixArray, canvasWithLine);
          } else
            errorsArray.push(
              "Can’t draw a line, please check command and coordinates"
            );

          break;
        case "R":
          if (isValidCommand("R", obj.R, canvasParams)) {
            canvasMatrixArray = checkError(
              canvasMatrixArray,
              createRectangle(
                canvasMatrixArray[canvasMatrixArray.length - 1],
                ...obj.R
              )
            );
          } else
            errorsArray.push(
              "Can’t draw a rectangle, please check command and coordinates"
            );
          break;
        case "B":
          if (isValidCommand("B", obj.B, canvasParams)) {
            canvasMatrixArray = checkError(
              canvasMatrixArray,
              bucketFill(
                canvasMatrixArray[canvasMatrixArray.length - 1],
                canvasParams,
                ...obj.B
              )
            );
          } else
            errorsArray.push(
              "Can’t fill the canvas, please check command and coordinates"
            );
          break;
        default:
          break;
      }
    }
  });

  const outputCanvas = fromMatrixToString(canvasMatrixArray);

  return createOutputObject(outputCanvas, errorsArray,true);
};

const bucketFill = (canvas, canvasParams, x, y, c) => {
  const canvasWithFill = copyMatrix(canvas);
  const targetSymbol = canvas[y][x];
  const visitedArray = [];
  const dotsToCheck = [{ x, y }];

  while (dotsToCheck.length > 0) {
    const { x, y } = dotsToCheck.pop();
    const isDotAvailable = !(
      x < 0 ||
      y < 0 ||
      x > canvasParams[0] ||
      y > canvasParams[1] ||
      isDotVisited(x, y, visitedArray)
    );

    if (isDotAvailable && canvasWithFill[y][x] === targetSymbol) {
      canvasWithFill[y][x] = c;

      visitedArray.push({ x, y });
      dotsToCheck.push(
        { x, y: y + 1 },
        { x, y: y - 1 },
        { x: x - 1, y },
        { x: x + 1, y }
      );
    }
  }

  return canvasWithFill;
};

const createRectangle = (canvas, x1, y1, x2, y2) => {
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
