import { fromStringToObject } from "../fromStringToObject";

test("Run function without params", () => {
  expect(fromStringToObject()).toStrictEqual({});
});

test("Run function with data", () => {
  expect(
      fromStringToObject(
          "C 20 4\n" + "L 1 2 6 2\n" + "L 6 3 6 4\n" + "R 16 1 20 3\n" + "B 10 3 o"
      )
  ).toStrictEqual([
    { C: [20, 4] },
    { L: [1, 2, 6, 2] },
    { L: [6, 3, 6, 4] },
    { R: [16, 1, 20, 3] },
    { B: [10, 3, "o"] }
  ]);
});

