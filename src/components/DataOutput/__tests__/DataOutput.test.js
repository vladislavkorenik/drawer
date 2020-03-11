import React from "react";
import renderer from "react-test-renderer";
import { DataOutput } from "../DataOutput";
import { createOutputObject } from "../../../logic/createOutputObject";

test("renders without crashing", () => {
  const component = renderer.create(
    <DataOutput
      data={createOutputObject("No data", ["some error, some error"])}
    />
  );

  expect(component).toMatchSnapshot();
});

test("renders without crashing", () => {
  const component = renderer.create(<DataOutput data={createOutputObject()} />);
  expect(component).toMatchSnapshot();
});

test("renders without crashing", () => {
  const component = renderer.create(
    <DataOutput data={createOutputObject("some data ---11-1-", [], true)} />
  );
  expect(component).toMatchSnapshot();
});
