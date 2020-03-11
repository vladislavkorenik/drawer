import { fromMatrixToString } from "../fromMatrixToString";

test("Run function without params", () => {
  expect(fromMatrixToString()).toStrictEqual("");
});

test("Run function with params", () => {
  expect(
    typeof fromMatrixToString([
      [
        ["-", "-", "-", "-"],
        ["-", " ", " ", "-"],
        ["-", "-", "-", "-"]
      ]
    ])
  ).toBe("string");
});
