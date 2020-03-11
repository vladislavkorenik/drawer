import { createOutputObject } from "../createOutputObject";

test("Run function without params", () => {
  expect(createOutputObject()).toStrictEqual({
    text: "No data",
    errors: ["No errors"],
    hasError: false,
    href: null
  });
});

test("Run function with errors", () => {
  expect(
    createOutputObject("No data", ["some error", "some error"])
  ).toStrictEqual({
    text: "No data",
    errors: ["some error", "some error"],
    hasError: true,
    href: null
  });
});

test("Run function with some data", () => {
  expect(
    createOutputObject("some data", ["some error", "some error"], true)
  ).toStrictEqual({
    text: "some data",
    errors: ["some error", "some error"],
    hasError: true,
    href: `data:text/plain;content-disposition=attachment;filename=file,some data`
  });
});
