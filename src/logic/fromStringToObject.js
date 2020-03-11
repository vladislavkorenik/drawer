export const fromStringToObject = (str = "") => {
  const commandsArr = str.split("\n");
  return str
    ? commandsArr.map(item => {
        return getCommands(item.trim().split(" "));
      })
    : {};
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
