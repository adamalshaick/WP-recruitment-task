import React from "react";
import { Page } from "../../../components/pages/Page";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Page />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
