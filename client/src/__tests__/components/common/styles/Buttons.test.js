import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import {
  Button,
  ButtonsCard
} from "../../../../components/common/styles/Buttons";

describe("render component", () => {
  it("renders button component", () => {
    const component = renderer.create(<Button />).toJSON();
    expect(component).toMatchSnapshot();
  });
  it("renders buttons card", () => {
    const component = renderer.create(<ButtonsCard />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
