import React from "react";
import NotFound from "../../../components/common/NotFound";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<NotFound />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
