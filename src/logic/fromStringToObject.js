export const fromStringToObject = str => {
  const commandsArr = str.split("\n");

  return commandsArr.map(item => {
    return getCommands(item.split(" "));
  });
};

const getCommands = command => {
  const [commandType, ...commandValue] = command;

  return {
    [commandType]:
      commandType !== "B"
        ? [...commandValue.map(element => +element)]
        : [+commandValue[0], +commandValue[1], commandValue[2]]
  };
};
