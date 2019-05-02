import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import {
  NotFoundWrapper,
  Button
} from "../../../../components/common/styles/NotFound";

describe("render component", () => {
  it("renders button component", () => {
    const component = renderer.create(<NotFoundWrapper />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
