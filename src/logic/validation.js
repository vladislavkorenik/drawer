import { isNumericArray } from "./isNumericArray";

export const isDotVisited = (x, y, visitedArray) =>
  visitedArray.some(coordinate => x === coordinate.x && y === coordinate.y);

export const isValidCommand = (commandName, commandParams, canvasParams) => {
  switch (commandName) {
    case "C":
      return (
        commandParams.length === 2 &&
        isNumericArray(commandParams) &&
        isCorrectCords([], commandParams)
      );
    case "L":
      return (
        commandParams.length === 4 &&
        isNumericArray(commandParams) &&
        isCorrectCords(canvasParams, commandParams)
      );
    case "R":
      return (
        commandParams.length === 4 &&
        isNumericArray(commandParams) &&
        isCorrectCords(canvasParams, commandParams)
      );
    case "B":
      return (
        commandParams.length === 3 &&
        isNumericArray([commandParams[0], commandParams[1]]) &&
        typeof commandParams[2] === "string" &&
        isCorrectCords(canvasParams, [commandParams[0], commandParams[1]])
      );
    default:
      return false;
  }
};

export const checkError = (array, createFunc) =>
  createFunc ? [...array, createFunc] : [...array];

export const isCorrectCords = (canvasParams, commandParams) => {
  let i = 0;
  let isZero = commandParams.some(num => num <= 0);

  while (commandParams.length >= i) {
    if (
      canvasParams[0] < commandParams[i] ||
      canvasParams[1] < commandParams[i + 1]
    ) {
      return false;
    }

    i += 2;
  }

  return !isZero;
};
