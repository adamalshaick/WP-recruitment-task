import React from "react";
import { Landing } from "../../../components/landing/Landing";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Landing />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
