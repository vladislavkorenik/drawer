import React from "react";
import renderer from "react-test-renderer";
import { DownloadButton } from "../DownloadButton";

test("renders without href", () => {
  const component = renderer.create(<DownloadButton href={false} />);
  expect(component).toMatchSnapshot();
});

test("renders with href", () => {
  const component = renderer.create(<DownloadButton href={"something"} />);
  expect(component).toMatchSnapshot();
});
