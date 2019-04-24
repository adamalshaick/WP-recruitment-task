import React from "react";
import Loading from "../../../components/common/Loading";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const wrapper = shallow(<Loading />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
