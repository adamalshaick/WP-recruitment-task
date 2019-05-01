import React from "react";
import { Films } from "../../../components/planets/Films";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  data: {
    title: "title"
  }
};

const wrapper = shallow(<Films {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
