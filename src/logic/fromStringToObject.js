export const fromStringToObject = str => {
  const commandsArr = str.split("\n");

  const objectCommands = commandsArr.map(item => {
    return getCommands(item.split(" "));
  });

  return objectCommands;
};

const getCommands = command => {
  const [commandType, ...commandValue] = command;

  return {
    [commandType]: commandValue
  };
};
