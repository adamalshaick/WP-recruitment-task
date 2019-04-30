import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { Dots } from "../../../../components/common/styles/Loading";

describe("render component", () => {
  it("renders button component", () => {
    const component = renderer.create(<Dots />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
