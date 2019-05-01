import React from "react";
import { Residents } from "../../../components/planets/Residents";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  data: {
    name: "name"
  }
};

const wrapper = shallow(<Residents {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
